// Copyright 2017-2020 @polkadot/react-query authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BareProps } from '@polkadot/react-api/types';
import BN from 'bn.js';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '@polkadot/react-query/translate';
import { toFormattedBalance } from '@polkadot/react-components/util';

interface Props extends BareProps {
  children?: React.ReactNode;
  label?: React.ReactNode;
  value?: BN | string;
  symbol: string;
  withSi?: boolean;
}

function FormatBalance ({ children, className, label, value, withSi, symbol }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  return (
    <div className={`ui--FormatBalance ${className}`}>
      {label || ''}{
        value
          ? value === 'all'
            ? t('all available')
            : withSi
              ? value
              : toFormattedBalance({ balance: value, unit: symbol })
          : '-'
      }{children}
    </div>
  );
}

export default styled(FormatBalance)`
  display: inline-block;
  vertical-align: baseline;

  * {
    vertical-align: baseline !important;
  }

  > label,
  > .label {
    display: inline-block;
    margin-right: 0.25rem;
    vertical-align: baseline;
  }

  > .balance-postfix {
    font-weight: 100;
    opacity: 0.75;
    vertical-align: baseline;
  }
`;
