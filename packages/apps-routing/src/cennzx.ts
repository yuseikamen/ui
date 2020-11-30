// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Routes } from './types';

import { faRandom } from '@fortawesome/free-solid-svg-icons';
import CennzX from '@cennznet/app-cennzx';

export default ([
  {
    Component: CennzX,
    display: {
      needsApi: []
    },
    i18n: {
      defaultValue: 'CENNZX'
    },
    icon: faRandom,
    name: 'CENNZX',
    isAdvanced: false
  }
] as Routes);
