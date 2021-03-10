// Copyright 2017-2020 @polkadot/react-api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import type BN from 'bn.js';
import { ApiProps, ApiState } from './types';
import type { InjectedExtension } from '@polkadot/extension-inject/types';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { StatusContext } from '@polkadot/react-components/Status';
import { TokenUnit } from '@polkadot/react-components/InputNumber';
import keyring from '@polkadot/ui-keyring';
import uiSettings from '@polkadot/ui-settings';
import ApiSigner from '@polkadot/react-signer/ApiSigner';
import { formatBalance, isTestChain } from '@polkadot/util';
import { setSS58Format } from '@polkadot/util-crypto';
import { defaults as addressDefaults } from '@polkadot/util-crypto/address/defaults';
import { BrowserStore } from '@polkadot/ui-keyring/stores';
import { accountRegex } from '@polkadot/ui-keyring/defaults';
import ApiContext from './ApiContext';
import registry from './typeRegistry';
import {Api as ApiPromise} from '@cennznet/api';
import * as staking from './staking';

interface Props {
  children: React.ReactNode;
  url?: string;
}

interface State extends ApiState {
  chain?: string | null;
}

interface InjectedAccountExt {
  address: string;
  meta: {
    name: string;
    source: string;
  };
}

const DEFAULT_DECIMALS = registry.createType( 'u32', 4);
const DEFAULT_SS58 = registry.createType( 'u32', addressDefaults.prefix);
const injectedPromise = web3Enable('cennznet.io');
let api: ApiPromise;

export { api };

export function supportOldKeyringInLocalStorage() {
  const store = new BrowserStore();
  store.all((key, json: any) => {
    if (accountRegex.test(key) && json.encoding) {
      // The difference between new way of storing the keyring is only in the field content
      // "encoding":{"content":["pkcs8",{"type":"sr25519"}] --- old
      // "encoding":{"content":["pkcs8","sr25519"] --- new
      // update the local storage with new way
      const pkcs8 = json.encoding.content[0];
      let accountType = json.encoding.content[1];
      if (typeof accountType === 'object' && accountType !== null) {
        accountType = Object.values(accountType)[0]
        json.encoding.content = [pkcs8, accountType];
        // update the storage only if has old format
        store.set(key, json);
      }
    }
  });
}

async function loadOnReady (api: ApiPromise): Promise<State> {
  const [properties, _systemChain, _systemName, _systemVersion, injectedAccounts] = await Promise.all([
    api.rpc.system.properties(),
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version(),
    web3Accounts().then((accounts): InjectedAccountExt[] =>
      accounts.map(({ address, meta }): InjectedAccountExt => ({
        address,
        meta: {
          ...meta,
          name: `${meta.name} (${meta.source === 'polkadot-js' ? 'extension' : meta.source})`
        }
      }))
    )
  ]);
  const ss58Format = uiSettings.prefix === -1
    ? properties.ss58Format.unwrapOr(DEFAULT_SS58).toNumber()
    : uiSettings.prefix;

  // TODO: query from genericAsset.assetRegistry
  // 1) find spending Asset ID
  // 2) find spending Asset ID decimals and symbol
  const tokenSymbol = 'CPAY';
  const tokenDecimals = properties.tokenDecimals.unwrapOr([DEFAULT_DECIMALS]);

  const systemChain = _systemChain
    ? _systemChain.toString()
    : '<unknown>';
  const isDevelopment = isTestChain(systemChain);

  console.log('api: found chain', systemChain, JSON.stringify(properties));

  // explicitly override the ss58Format as specified
  registry.setChainProperties(registry.createType( 'ChainProperties', { ...properties, ss58Format }));

  // FIXME This should be removed (however we have some hanging bits, e.g. vanity)
  setSS58Format(ss58Format);

  // first setup the UI helpers
  formatBalance.setDefaults({
    decimals: (tokenDecimals as BN[]).map((b) => b.toNumber()),
    unit: tokenSymbol
  });
  TokenUnit.setAbbr(tokenSymbol);

  // Go through local storage and support the storage with old keyring value
  supportOldKeyringInLocalStorage();

  // finally load the keyring
  keyring.loadAll({
    genesisHash: api.genesisHash as any,
    isDevelopment,
    ss58Format,
    type: 'ed25519'
  }, injectedAccounts);

  const defaultSection = Object.keys(api.tx)[0];
  const defaultMethod = Object.keys(api.tx[defaultSection])[0];
  const apiDefaultTx = api.tx[defaultSection][defaultMethod];
  const apiDefaultTxSudo = (api.tx.system && api.tx.system.setCode) || apiDefaultTx;
  const isSubstrateV2 = !!Object.keys(api.consts).length;

  return {
    apiDefaultTx,
    apiDefaultTxSudo,
    hasInjectedAccounts: injectedAccounts.length !== 0,
    isApiReady: true,
    isDevelopment,
    isSubstrateV2,
    systemChain,
    systemName: _systemName.toString(),
    systemVersion: _systemVersion.toString()
  } as unknown as State;
}

export default function Api ({ children, url }: Props): React.ReactElement<Props> | null {
  const { queuePayload, queueSetTxStatus } = useContext(StatusContext);
  const [state, setState] = useState<State>({ hasInjectedAccounts: false, isApiReady: false } as Partial<State> as State);
  const [isApiConnected, setIsApiConnected] = useState(false);
  const [isApiInitialized, setIsApiInitialized] = useState(false);
  const [extensions, setExtensions] = useState<InjectedExtension[] | undefined>();

  const value = useMemo<ApiProps>(
    () => ({ ...state, api, extensions, isApiConnected, isApiInitialized, isWaitingInjected: !extensions }),
    [extensions, isApiConnected, isApiInitialized, state]
  );

  // initial initialization
  useEffect((): void => {

    const signer = new ApiSigner(registry, queuePayload, queueSetTxStatus);
    const derives = { staking };
    api = new ApiPromise({ provider: url, registry, derives, signer });

    api.on('connected', (): void => setIsApiConnected(true));
    api.on('disconnected', (): void => setIsApiConnected(false));
    api.on('ready', async (): Promise<void> => {
      try {
        setState(await loadOnReady(api));
        api.query.staking.activeEra = api.query.staking.currentEra;
      } catch (error) {
        console.error('Unable to load chain', error);
      }
    });

    injectedPromise
      .then(setExtensions)
      .catch(console.error);

    setIsApiInitialized(true);
  }, []);

  if (!value.isApiInitialized) {
    return null;
  }

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  );
}
