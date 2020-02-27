// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Routes } from './types';

import Template from '@polkadot/app-fee-exchange';

export default ([
  {
    Component: Template,
    display: {
      isHidden: false,
      needsAccounts: true,
      needsApi: [
        'tx.genericAsset.transfer'
      ]
    },
    i18n: {
      defaultValue: 'Fee Exchange'
    },
    icon: 'th',
    name: 'fee-exchange'
  }
] as Routes);
