// Copyright 2017-2020 @polkadot/app-staking authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AppProps as Props } from '@polkadot/react-components/types';
import React, {  useMemo,  useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Tabs from '@polkadot/react-components/Tabs';
import { useAccounts, useCall, useApi } from '@polkadot/react-hooks';

import Actions from './Actions';
import Overview from './Overview';
import Summary from './Overview/Summary';
import { useTranslation } from './translate';

export default function ToolboxApp ({ basePath }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
    const { api } = useApi();
  const { hasAccounts } = useAccounts();
    const { pathname } = useLocation();
    const [next] = useState<string[]>([]);
    const stakingOverview = useCall<any>(api.derive.staking.overview, []);
  const items = useMemo(() => [
    {
      isRoot: true,
      name: 'overview',
      text: t('Overview')
    },
    {
      name: 'actions',
      text: t('Actions')
    },
  ], [t]);

  return (
      <main className='toolbox--App'>
        <header>
          <Tabs
              basePath={basePath}
              hidden={
                hasAccounts
                    ? []
                    : ['sign', 'verify']
              }
              items={items}
          />
        </header>
          <Summary
              isVisible={pathname === basePath}
              next={next}
              nominators={[]}
              stakingOverview={stakingOverview}
          />
        <Switch>
          <Route path={`${basePath}/overview`} component={Overview} />
          <Route path={`${basePath}/actions`} component={Actions} />
          <Route component={Overview} />
        </Switch>
      </main>
  );
}
