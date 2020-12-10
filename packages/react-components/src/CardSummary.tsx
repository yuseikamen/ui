// Copyright 2017-2020 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BN from 'bn.js';
import React from 'react';
import styled from 'styled-components';

import type { UInt } from '@polkadot/types';
import { formatNumber, isUndefined } from '@polkadot/util';

import type { ThemeProps } from './types';
import Labelled from './Labelled';
import Progress from './Progress';

interface ProgressProps {
    hideValue?: boolean;
    isPercent?: boolean;
    total?: BN | UInt;
    value?: BN | UInt;
    withTime?: boolean;
}

interface Props {
    children?: React.ReactNode;
    className?: string;
    help?: React.ReactNode;
    label: React.ReactNode;
    progress?: ProgressProps;
}

function CardSummary ({ children, className = '', help, label, progress }: Props): React.ReactElement<Props> | null {
    const value = progress && progress.value;
    const total = progress && progress.total;
    const left = progress && !isUndefined(value) && !isUndefined(total) && value.gten(0) && total.gtn(0)
        ? (
            value.gt(total)
                ? `>${
                    progress.isPercent
                        ? '100'
                        : formatNumber(total)
                }`
                : (
                    progress.isPercent
                        ? value.muln(100).div(total).toString()
                        : formatNumber(value)
                )
        )
        : undefined;

    if (progress && isUndefined(left)) {
        return null;
    }

    return (
        <article className={className}>
            <Labelled
                help={help}
                isSmall
                label={label}
            >
                {children}{
                progress && !progress.hideValue && (
                    !left || isUndefined(progress.total)
                        ? '-'
                        : `${left}${progress.isPercent ? '' : '/'}${
                            progress.isPercent
                                ? '%'
                                : formatNumber(progress.total)
                        }`
                )
            }
                {progress && <Progress {...progress} />}
            </Labelled>
        </article>
    );
}

export default React.memo(styled(CardSummary)(({ theme }: ThemeProps) => `
  align-items: center;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  color: ${theme.colorSummary};
  display: flex;
  flex: 0 1 auto;
  flex-flow: row wrap;
  justify-content: flex-end;
  padding: 0 1.5rem;

  .ui--FormatBalance .balance-postfix {
    opacity: 1;
  }

  .ui--Progress {
    margin: 0.5rem 0.125rem 0.125rem 0.75rem;
  }

  > .ui--Labelled {
    font-size: 1.75rem;
    font-weight: ${theme.fontWeightLight};
    position: relative;
    line-height: 1.4;
    text-align: right;

    > * {
      margin: 0.5rem 0;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    > label {
      font-size: 0.95rem;
    }

    .isSecondary {
      font-size: 1rem;
      font-weight: 400;

      .timer {
        min-width: 8rem;
      }
    }
  }

  @media(max-width: 767px) {
    min-height: 4.8rem;
    padding: 0.25 0.4em;

    > div {
      font-size: 1.4rem;
    }
  }
`));
