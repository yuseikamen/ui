// Copyright 2017-2020 @polkadot/app-staking authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { AddressSmall, Table } from '@polkadot/react-components';
import BN from 'bn.js';
import { useAccounts, useAddresses, useApi } from '@polkadot/react-hooks';
import FormatBalance from '@polkadot/app-generic-asset/FormatBalance';
import {
  STAKING_ASSET_NAME,
  SPENDING_ASSET_NAME
} from '@polkadot/app-generic-asset/assetsRegistry';

import { useTranslation } from '../../translate';
import { getStakes } from './utils';

export interface Stake {
  stashAccountAddress: string;
  controllerAccountAddress: string;
  stakeAmount: BN;
  rewardDestinationsAddress: string;
  nominates: Nominate[];
}

export interface Nominate {
  nominateToAddress: string;
  stakeShare?: BN;
  commission?: BN;
  nextRewardEstimate?: BN;
  elected?: boolean;
}

interface Props {
  className?: string;
}

function MyStake({ className = '' }: Props): React.ReactElement<Props> {
  const [stakes, setStakes] = useState<Stake[]>([]);

  const { t } = useTranslation();
  const { api } = useApi();
  const { allAddresses } = useAddresses();
  const { allAccounts } = useAccounts();
  const addresses = [...new Set([...allAddresses, ...allAccounts])]; // Use new Set to remove duplicate

  api.isReady.then(async () => {
    const stakes = await getStakes(api, addresses);

    setStakes(stakes);
  });

  const _renderStakes = useCallback(
    (stakes: Stake[]) => {
      return stakes.map(stake => {
        return (
          <div
            className={
              stake.nominates.length === 0
                ? 'tbody-container'
                : 'tbody-container tbody-container-with-nominators'
            }
            key={`${stake.stashAccountAddress}-${stake.controllerAccountAddress}`}
          >
            <tbody
              className={
                stake.nominates.length === 0 ? '' : 'tbody-with-nominators'
              }
            >
              <tr>
                <th>{t('Stash')}</th>
                <th>{t('Controller')}</th>
                <th>{t('Amount')}</th>
                <th>{t('Reward Destination')}</th>
              </tr>
              <tr>
                <td className='address'>
                  <AddressSmall value={stake.stashAccountAddress} />
                </td>
                <td className='address'>
                  <AddressSmall value={stake.controllerAccountAddress} />
                </td>
                <td>
                  <FormatBalance
                    value={stake.stakeAmount}
                    symbol={STAKING_ASSET_NAME}
                  />
                </td>
                <td className='address'>
                  <AddressSmall value={stake.rewardDestinationsAddress} />
                </td>
              </tr>
              {stake.nominates.length === 0 ? (
                <tr />
              ) : (
                <tr>
                  <th>{t('Nominating')}</th>
                  <th>{t('Stake share')}</th>
                  <th>{t('Next reward estimate')}</th>
                  <th>{t('Elected')}</th>
                </tr>
              )}
              {stake.nominates.map(nominate => (
                <tr
                  key={`${stake.stashAccountAddress}-${stake.controllerAccountAddress}-${nominate.nominateToAddress}`}
                >
                  <td>
                    <AddressSmall value={nominate.nominateToAddress} />
                  </td>
                  <td>
                    <div>{`${nominate.stakeShare?.toString(2)}%`}</div>
                  </td>
                  <td>
                    <FormatBalance
                      value={nominate.nextRewardEstimate?.toString()}
                      symbol={SPENDING_ASSET_NAME}
                    />
                  </td>
                  <td>{`${nominate.elected}`}</td>
                </tr>
              ))}
            </tbody>
          </div>
        );
      });
    },
    [stakes]
  );

  return (
    <div className={`staking--Overview--MyStake ${className}`}>
      <StyledTable className='staking--Overview--MyStake-Table'>
        {_renderStakes(stakes)}
      </StyledTable>
    </div>
  );
}

export default MyStake;

const StyledTable = styled(Table)`
  font-size: 15px;

  table {
    display: block;
    width: 100%;
    border-collapse: collapse;
  }

  tbody-container {
    display: block;
    width: 100%;
  }

  tbody {
    display: block;
    width: 100%;
  }

  tr {
    display: flex;
    width: 100%;
  }

  th {
    background: #fafafa !important;
    color: rgba(78, 78, 78, 0.66) !important;
    text-align: left !important;
    flex: 1;
  }

  td {
    flex: 1;
  }

  td:first-child {
    border-top-left-radius: 10px !important;
    border-bottom-left-radius: 10px !important;
  }

  td:last-child {
    border-top-right-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
  }

  .tbody-container-with-nominators {
    background-color: white;
    border: 1px solid #f2f2f2;
    padding: 1rem;
    margin: 0.75rem 0;

    th {
      background: white !important;
    }
    td {
      background: #fafafa !important;
    }
  }
`;
