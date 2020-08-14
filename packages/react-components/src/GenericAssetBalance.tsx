// Copyright 2017-2020 @polkadot/react-query authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import BN from 'bn.js';
import { BareProps } from '@polkadot/react-api/types';
import { Balance } from '@polkadot/types/interfaces';
import { useApi, useCall } from '@polkadot/react-hooks';

import assetsRegistry, {
  SPENDING_ASSET_NAME,
  STAKING_ASSET_NAME
} from '@polkadot/app-generic-asset/assetsRegistry';
import { toFormattedBalance } from '@polkadot/react-components/util';

interface Props extends BareProps {
  assetId: BN;
  balanceValue: BN | string;
}

export default function GenericAssetBalace ({ assetId, balanceValue }: Props): React.ReactElement<Props> {
  const { api } = useApi();

  const cennzBalance = useCall<Balance>(
    api.query.genericAsset.freeBalance as any,
    [assetsRegistry.getStakingAssetId(), []]
  );
  const cpayBalance = useCall<Balance>(
    api.query.genericAsset.freeBalance as any,
    [assetsRegistry.getSpendingAssetId(), []]
  );
  const zeroBalance = new BN(0);

  // Show CENNZ balance unless it's 0 and CPAY is non-zero
  const displaySymbol =
    cennzBalance?.eq(zeroBalance) && cpayBalance?.gt(zeroBalance)
      ? SPENDING_ASSET_NAME
      : STAKING_ASSET_NAME;

  return (
    <>
      {balanceValue &&
        toFormattedBalance({
          balance: balanceValue,
          unit: displaySymbol
        })}
    </>
  );
}
