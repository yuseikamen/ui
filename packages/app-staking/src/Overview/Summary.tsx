// Copyright 2017-2020 @polkadot/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';

import type { DeriveStakingOverview, DeriveSessionInfo } from '@polkadot/api-derive/types';
import type { SessionIndex } from '@polkadot/types/interfaces/session';
import { CardSummary, SummaryBox } from '@polkadot/react-components';
import { useTranslation } from '../translate';
import {useApi, useCall} from "@polkadot/react-hooks";
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BN from 'bn.js';
import { u64, EraIndex, Option } from '@cennznet/types';
interface Props {
  className?: string;
  isVisible: boolean;
  next?: string[];
  nominators?: string[];
  stakingOverview?: DeriveStakingOverview;
  rewards?: string;
}

function Summary ({ className = '',  isVisible, next, nominators, stakingOverview, rewards }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { api } = useApi();
  let progress = new BN(0);
  const sessionInfo = useCall<DeriveSessionInfo>(api.derive.session?.info);
  const currentSlot = useCall<u64>(api.query.babe.currentSlot);
  const epochIndex = useCall<u64>(api.query.babe.epochIndex);
  const genesisSlot = useCall<u64>(api.query.babe.genesisSlot);
  const currentEraIndex = useCall<Option<EraIndex>>(api.query.staking.currentEra);
  const currentEraStartSessionIndex = useCall<Option<SessionIndex>>(api.query.staking.erasStartSessionIndex, [currentEraIndex?.unwrap()]);
  // const currentEraStartSessionIndex = useCall<SessionIndex>(api.query.staking.currentEraStartSessionIndex);
  const sessionsPerEra = api.consts?.staking?.sessionsPerEra;
  const epochDuration =  api.consts?.babe?.epochDuration;
  const eraLength = sessionsPerEra.mul(epochDuration);
  let nextElectionIn = eraLength ? eraLength : new BN(0);
  if (sessionInfo && epochIndex && genesisSlot && currentSlot && currentEraStartSessionIndex) {
      const epochStartSlot = epochIndex.mul(sessionInfo.sessionLength).iadd(genesisSlot);
      const sessionProgress = currentSlot.gt(epochDuration) ? currentSlot.sub(epochStartSlot): new BN(0);
      if (sessionInfo.currentIndex.gte(currentEraStartSessionIndex.unwrap())) {
          const eraProgress = sessionInfo.currentIndex.sub(currentEraStartSessionIndex.unwrap()).imul(sessionInfo.sessionLength).iadd(sessionProgress);
          if (eraLength.gte(eraProgress)) {
              nextElectionIn = eraLength.sub(eraProgress);
              progress = eraProgress.muln(100).div(eraLength);
          }
      }
  }

  // Progress bar
  const containerStyles = {
      height: 3,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 10,
  }

  const fillerStyles = {
      height: '100%',
      width: `${progress}%`,
      backgroundColor: '#f19135',
      borderRadius: 'inherit',
  }

  return (
      <SummaryBox className={`${className}${!isVisible ? ' staking--hidden' : ''}`}>
        <section>
          {stakingOverview && (
              <CardSummary label={t<string>('validators')}>
                {stakingOverview.validators.length}/{stakingOverview.validatorCount.toString()}
              </CardSummary>
          )}
          {!!next?.length && (
              <CardSummary
                  className='media--1000'
                  label={t<string>('waiting')}
              >
                {next.length}
              </CardSummary>
          )}
          {!!nominators?.length && (
              <CardSummary
                  className='media--1100'
                  label={t<string>('nominators')}
              >
                {nominators.length}
              </CardSummary>
          )}
            <CardSummary
              className='media--1200'
              label={t<string>('next election in')}
            >
              {nextElectionIn.toString()}&nbsp;
                <FontAwesomeIcon icon={faCube} size='1x' />
                <div style={containerStyles}>
                    <div style={fillerStyles}></div>
                </div>
            </CardSummary>
            <CardSummary
                className='media--1200'
                label={t<string>('next reward')}
            >
                {rewards}
            </CardSummary>
        </section>
      </SummaryBox>
  );
}

export default React.memo(styled(Summary)`
  .validator--Account-block-icon {
    display: inline-block;
    margin-right: 0.75rem;
    margin-top: -0.25rem;
    vertical-align: middle;
  }

  .validator--Summary-authors {
    .validator--Account-block-icon+.validator--Account-block-icon {
      margin-left: -1.5rem;
    }
  }
`);
