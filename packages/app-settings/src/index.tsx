// Copyright 2017-2020 @polkadot/app-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AppProps as Props } from '@polkadot/react-components/types';

import React, { useMemo } from 'react';
import { Route, Switch } from 'react-router';

import { HelpOverlay, Tabs } from '@polkadot/react-components';
import uiSettings from '@polkadot/ui-settings';

import md from './md/basics.md';
import { useTranslation } from './translate';
import Developer from './Developer';
import General from './General';
import useChainInfo from "@polkadot/app-settings/useChainInfo";
import Metadata from './Metadata';
import useCounter from "@polkadot/app-settings/useCounter";

const hidden = uiSettings.uiMode === 'full'
  ? []
  : ['developer'];

export default function SettingsApp ({ basePath, onStatusChange }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const chainInfo = useChainInfo();
  const numExtensions = useCounter();
  console.log('Chain info::', chainInfo);
  const items = useMemo(() => [
    {
      isRoot: true,
      name: 'general',
      text: t('General')
    },
    {
      count: numExtensions,
      name: 'metadata',
      text: t<string>('Metadata')
    },
    {
      name: 'developer',
      text: t('Developer')
    }
  ], [t]);

  return (
    <main className='settings--App'>
      <HelpOverlay md={md} />
      <header>
        <Tabs
          basePath={basePath}
          hidden={hidden}
          items={items}
        />
      </header>
      <Switch>
        <Route path={`${basePath}/developer`}>
          <Developer
            basePath={basePath}
            onStatusChange={onStatusChange}
          />
        </Route>
        <Route path={`${basePath}/metadata`}>
          <Metadata />
        </Route>
        <Route component={General} />
      </Switch>
    </main>
  );
}
