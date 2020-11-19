// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import React, { useState } from 'react';
import { Button, InputAddress, InputBalance, TxButton } from '@polkadot/react-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretLeft, faCaretRight, faRandom} from '@fortawesome/free-solid-svg-icons';

interface Props {
  accountId?: string | null;
}

export default function Transfer ({ accountId }: Props): React.ReactElement<Props> {
  const [amount, setAmount] = useState<BN | undefined | null>(null);
  const [recipientId, setRecipientId] = useState<string | null>(null);

  return (
      <div style={{ display: "flexbox", textAlign: "center", justifyContent: "center", maxWidth: "60em" }}>
          <h1 style={{ fontFamily: "Arial", textTransform: "uppercase", fontWeight: "bold" }}>CENNZX</h1>
          <Button.Group style={{ display: "flex", justifyContent: "center" }}>
            <Button icon="" style={{ maxHeight: "3.4em", marginTop: "1em", minWidth: "8em", marginRight: "1em" }}>CENNZ</Button>
            <h1><FontAwesomeIcon icon={faRandom}/></h1>
            <Button icon="" style={{ maxHeight: "3.4em", marginTop: "1em", minWidth: "8em", marginLeft: "1em" }}>CPAY</Button>
          </Button.Group>
          <InputAddress
            style={{ paddingRight: "2rem", maxWidth: "30em", margin: "auto" }}
            label='account'
            onChange={setRecipientId}
            type='all'
          />
          <InputBalance
            style={{ paddingRight: "2rem", maxWidth: "30em", margin: "auto" }}
            label='amount'
            onChange={setAmount}
          />
          <Button.Group style={{ display: "flex", justifyContent: "center" }}>
            <Button icon="" style={{ minWidth: "20em", minHeight: "3em" }}>Swap</Button>
          </Button.Group>
      </div>
  );
}
