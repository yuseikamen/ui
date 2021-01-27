// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Routes } from './types';

// import Staking from '@polkadot/app-staking';
import PropertyTrading from '@polkadot/apps-propertyTrading';

export default ([
  {
    Component: PropertyTrading,
    display: {
      needsApi: [
        [
          'tx.staking.bond' // current bonding API
        ]
      ]
    },
    i18n: {
      defaultValue: 'Property Trading'
    },
    icon: 'certificate',
    name: 'Property Trading',
    isAdvanced: true
  }
] as Routes);
