// Copyright 2017-2020 @polkadot/react-api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import type { ApiProps, ApiState } from './types';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { StatusContext } from '@polkadot/react-components/Status';
import { TokenUnit } from '@polkadot/react-components/InputNumber';
import keyring from '@polkadot/ui-keyring';
import uiSettings from '@polkadot/ui-settings';
import ApiSigner from '@polkadot/react-signer/ApiSigner';
import { createType } from '@polkadot/types';
import { formatBalance, isTestChain } from '@polkadot/util';
import { setSS58Format } from '@polkadot/util-crypto';
import { defaults as addressDefaults } from '@polkadot/util-crypto/address/defaults';
import type { KeyringStore } from '@polkadot/ui-keyring/types';
import type { InjectedExtension } from '@polkadot/extension-inject/types';
import ApiContext from './ApiContext';
import registry from './typeRegistry';
import {Api as ApiPromise} from '@cennznet/api';
import store from "store";

interface Props {
  children: React.ReactNode;
  url?: string;
  store?: KeyringStore;
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

const DEFAULT_DECIMALS = createType(registry, 'u32', 4);
const DEFAULT_SS58 = createType(registry, 'u32', addressDefaults.prefix);
let api: ApiPromise;

export { api };

function isKeyringLoaded () {
  try {
    return !!keyring.keyring;
  } catch {
    return false;
  }
}
function getDevTypes (): Record<string, Record<string, string>> {
  const types = store.get('types', {}) as Record<string, Record<string, string>>;
  const names = Object.keys(types);

  names.length && console.log('Injected types:', names.join(', '));

  return types;
}

async function loadOnReady (api: ApiPromise, injectedPromise: Promise<InjectedExtension[]>, store: KeyringStore | undefined, types: Record<string, Record<string, string>>): Promise<State> {
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
  const tokenSymbol = 'Cpay';
  const tokenDecimals = properties.tokenDecimals.unwrapOr(DEFAULT_DECIMALS).toNumber();

  const systemChain = _systemChain
    ? _systemChain.toString()
    : '<unknown>';
  const isDevelopment = isTestChain(systemChain);

  console.log('api: found chain', systemChain, JSON.stringify(properties));

  // explicitly override the ss58Format as specified
  registry.setChainProperties(createType(registry, 'ChainProperties', { ...properties, ss58Format }));

  // FIXME This should be removed (however we have some hanging bits, e.g. vanity)
  setSS58Format(ss58Format);

  // first setup the UI helpers
  formatBalance.setDefaults({
    decimals: tokenDecimals,
    unit: tokenSymbol
  });
  TokenUnit.setAbbr(tokenSymbol);

// finally load the keyring
  isKeyringLoaded() || keyring.loadAll({
    genesisHash: api.genesisHash,
    isDevelopment,
    ss58Format,
    store,
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
    isApiReady: true,
    isDevelopment,
    isSubstrateV2,
    systemChain,
    systemName: _systemName.toString(),
    systemVersion: _systemVersion.toString()
  } as State;
}

export default function Api ({ children, store, url }: Props): React.ReactElement<Props> | null {
  const { queuePayload, queueSetTxStatus } = useContext(StatusContext);
  const [state, setState] = useState<State>({ isApiReady: false } as Partial<State> as State);
  const [isApiConnected, setIsApiConnected] = useState(false);
  const [isApiInitialized, setIsApiInitialized] = useState(false);
  const [apiError, setApiError] = useState<null | string>(null);
  const [extensions, setExtensions] = useState<InjectedExtension[] | undefined>();
  const value = useMemo<ApiProps>(
      () => ({ ...state, api, apiError, extensions, isApiConnected, isApiInitialized, isWaitingInjected: !extensions }),
      [apiError, extensions, isApiConnected, isApiInitialized, state]
  );
  // initial initialization
  useEffect((): void => {
    const signer = new ApiSigner(queuePayload, queueSetTxStatus);
    const types = getDevTypes();
    api = new ApiPromise({ provider: url, registry, signer });

    api.on('connected', (): void => setIsApiConnected(true));
    api.on('disconnected', (): void => setIsApiConnected(false));
    api.on('ready', async (): Promise<void> => {
      const injectedPromise = web3Enable('polkadot-js/apps');

      injectedPromise
          .then(setExtensions)
          .catch(console.error);

      loadOnReady(api, injectedPromise, store, types)
          .then(setState)
          .catch((error): void => {
            console.error(error);

            setApiError((error as Error).message);
          });
    });

    // injectedPromise
    //   .then((): void => setIsWaitingInjected(false))
    //   .catch((error: Error) => console.error(error));

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
