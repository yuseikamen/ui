/* eslint-disable @typescript-eslint/camelcase */
// Copyright 2017-2019 @polkadot/react-query authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BareProps, CallProps } from '@polkadot/react-api/types';
 import { DerivedBalances } from '@polkadot/api-derive/types';
// import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
// import { Balance } from '@cennznet/types';
import React from 'react';
import { formatBalance } from '@polkadot/util';
import { withCalls } from '@polkadot/react-api';
import BN from "bn.js";
import { Balance } from '@polkadot/types/interfaces';

interface Props extends BareProps, CallProps {
 // balances_all?: DerivedBalances;
  children?: React.ReactNode;
  label?: React.ReactNode;
  // params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
//  params: any[];
  assetId?: BN | string;
  accountId?: string | null;
  genericAsset_totalBalance?: Balance,
}

function AvailableDisplay ({ genericAsset_totalBalance, children, className, label = '' }: Props): React.ReactElement<Props> {
  console.log('**************');
  console.log('Available balance:', genericAsset_totalBalance ? genericAsset_totalBalance.toString(): '');
  // console.log('Inside available balance params are::', props.params);
  return (
    <div className={className}>
      {label}{
      genericAsset_totalBalance
          ? formatBalance(genericAsset_totalBalance)
          : '0'
      }{children}
    </div>
  );
}

export default withCalls<Props>(
 // ['query.genericAsset.freeBalance', { paramName: 'params' }]
    ['derive.genericAsset.totalBalance', { paramName: ['assetId', 'accountId'] }],
)(AvailableDisplay);
