// Copyright 2017-2021 @polkadot/app-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@polkadot/api';
import type { ChainInfo } from './types';

import { useMemo } from 'react';
import { defaults as addressDefaults } from '@polkadot/util-crypto/address/defaults';
import { useApi } from '@polkadot/react-hooks';
import { getSpecTypes, getSpecExtensions } from '@polkadot/types-known';

function createInfo (api: ApiPromise, systemChain: string, systemName: string): ChainInfo {
  const DEFAULT_DECIMALS = api.registry.createType('u32', 12);
  const DEFAULT_SS58 = api.registry.createType('u32', addressDefaults.prefix);
  const specTypes = getSpecTypes(api.registry, systemChain, api.runtimeVersion.specName, api.runtimeVersion.specVersion);
  delete specTypes?.ExtrinsicSignatureV4;
  delete specTypes?.SignerPayload;
  delete specTypes?.ExtrinsicPayloadV4;
  const signedExtension = ["CheckSpecVersion", "CheckTxVersion", "CheckGenesis", "CheckMortality", "CheckNonce", "CheckWeight", "ChargeTransactionPayment"];
  // const signedExtensionTypes = {userExtensions:getSpecExtensions(api.registry, systemChain, api.runtimeVersion.specName)};
  const userExtensions = getSpecExtensions(api.registry, systemChain, api.runtimeVersion.specName);
  console.log('Spec types:::', specTypes);
  // console.log('Signed Extension types:::', signedExtensionTypes);
  console.log('Meta calls:',api.runtimeMetadata.asCallsOnly.toJSON());
  return {
    chain: systemChain,
    color: '#191a2e',
    genesisHash: api.genesisHash.toHex(),
    icon: 'cennznet',
    metaCalls: Buffer.from(api.runtimeMetadata.asCallsOnly.toU8a()).toString('base64'),
    specVersion: api.runtimeVersion.specVersion.toNumber(),
    ss58Format: DEFAULT_SS58.toNumber(),
    tokenDecimals: DEFAULT_DECIMALS.toNumber(),
    tokenSymbol: 'CENNZ',
    types: specTypes as unknown as Record<string, string>,
    signedExtension,
    userExtensions,
  };
}

export default function useChainInfo (): ChainInfo | null {
  const { api, isApiReady, systemChain, systemName } = useApi();

  return useMemo(
    () => isApiReady
      ? createInfo(api as any, systemChain, systemName)
      : null,
    [api, isApiReady, systemChain, systemName]
  );
}
