// Copyright 2017-2020 @polkadot/react-query authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BareProps } from '@polkadot/react-api/types';
// import { DerivedBalancesAll } from '@polkadot/api-derive/types';
import { Address } from '@polkadot/types/interfaces';

import React from 'react';
import { useApi, useCall } from '@polkadot/react-hooks';

import FormatBalance from './FormatBalance';
import BN from 'bn.js';

interface Props extends BareProps {
  children?: React.ReactNode;
  label?: React.ReactNode;
  params?: (number | Address | string | null) [];
}

export default function BalanceDisplay ({ children, className, label, params }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  console.log('Params:', params);
  console.log('type of Params:', typeof params);
  console.log('Params: 16000 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY');
  console.log('API:', api);
  const freeBalance = useCall<BN>(api.query.genericAsset.freeBalance as any, params as any);
  console.log('^^R%%$%$%$%', freeBalance?.toString());
  // console.log(freeBalance.toString());
  return (
    <FormatBalance
      className={className}
      label={label}
      value={freeBalance}
    >
      {children}
    </FormatBalance>
  );
}
