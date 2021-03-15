// Copyright 2017-2020 @polkadot/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { StakingBadge } from '@polkadot/react-components';
import { useApi } from '@polkadot/react-hooks';

interface Props {
  numNominators?: number;
  hover?: React.ReactNode;
}

function MaxBadge ({ numNominators, hover }: Props): React.ReactElement<Props> | null {
  const { api } = useApi();

  const max = api.consts.staking?.maxNominatorRewardedPerValidator;

  if (!numNominators || !max || max.gten(numNominators)) {
    return null;
  }

  return (
    <StakingBadge
      color='red'
      icon='balance-scale-right'
      hover={hover}
    />
  );
}

export default React.memo(MaxBadge);
