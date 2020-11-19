// Copyright 2017-2020 @cennznet/app-cennzx authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// global app props
import { AppProps as Props } from '@polkadot/react-components/types';

import Card from '@polkadot/react-components/Card'
// external imports (including those found in the packages/*
// of this repo)
import React, { useState } from 'react';
import Transfer from './Transfer';

export default function CennzX ({ className }: Props): React.ReactElement<Props> {
  const [accountId, setAccountId] = useState<string | null>(null);

  return (
    // in all apps, the main wrapper is setup to allow the padding
    // and margins inside the application. (Just from a consistent pov)
    <main className={className} style={{ margin: "auto", minWidth: "55%", maxWidth: "80%", justifyContent: "center", marginTop: "5%" }}>
      <Card>
        <Transfer accountId={accountId}/>
      </Card>
    </main>
  );
}
