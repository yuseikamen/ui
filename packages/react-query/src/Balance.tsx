/* eslint-disable @typescript-eslint/camelcase */
// Copyright 2017-2019 @polkadot/react-query authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BareProps, CallProps } from '@polkadot/react-api/types';
import { DerivedBalances } from '@polkadot/api-derive/types';
import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';

import React from 'react';

import { withCalls } from '@polkadot/react-api';
import { formatBalance } from '@polkadot/util';
import { Balance } from '@polkadot/types/interfaces';

interface Props extends BareProps, CallProps {
  children?: React.ReactNode;
  label?: React.ReactNode;
  params?: any [];
  genericAsset_totalBalance?: Balance,
}

export function BalanceDisplay ({ children, className, label = '', genericAsset_totalBalance }: Props): React.ReactElement<Props> {
  return (
    <div className={className}>
      {label}{
      genericAsset_totalBalance
          ? genericAsset_totalBalance
          : '-'
      }{children}
    </div>
  );
}

export default withCalls<Props>(
   ['query.genericAsset.freeBalance', { paramName: 'params' }]
    // ['query.genericAsset.freeBalance', { paramName: ['assetId', 'accountId']}],
)(BalanceDisplay);
