// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import React, { useState } from 'react';
import { Button, InputAddress, InputBalance, TxButton } from '@polkadot/react-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { textHover } from 'styled-theming/themes/dark/colors';

interface Props {
  accountId?: string | null;
}

export default function Transfer ({ accountId }: Props): React.ReactElement<Props> {
  const [amount, setAmount] = useState<BN | undefined | null>(null);
  const [recipientId, setRecipientId] = useState<string | null>(null);

  return (
      <div style={{ display: "flexbox", textAlign: "center", justifyContent: "center" }}>
          <h1 style={{ fontFamily: "Arial", textTransform: "uppercase", fontWeight: "bold" , marginBottom: "2em", boxShadow: "0 1px 2px -2px gray" }}>CENNZX</h1>
          <Button.Group style={{ display: "flex", justifyContent: "center" }}>
            <Button 
            icon=""
            style={{ maxHeight: "3.4em", marginTop: "1em", minWidth: "8em", marginRight: "1em", background: "#f19135" }}>CENNZ</Button>
            <h1><FontAwesomeIcon icon={faCaretLeft}/> <FontAwesomeIcon icon={faCaretRight} style={{ color: "#f19135" }}/></h1>
            <Button
              icon=""
              style={{ maxHeight: "3.4em", marginTop: "1em", minWidth: "8em", marginLeft: "1em" }}>CPAY</Button>
          </Button.Group>
          <InputAddress
            style={{ paddingRight: "2rem", marginTop: "1em", maxWidth: "30em", marginLeft: "auto", marginRight: "auto" }}
            label='account'
            onChange={setRecipientId}
            type='all'
          />
          <InputBalance
            style={{ paddingRight: "2rem", marginTop: "1em", maxWidth: "30em", marginLeft: "auto", marginRight: "auto" }}
            label='amount'
            onChange={setAmount}
          />
          <p style={{ marginTop: "1em" }}>You will receive: 10000 CPAY</p>
          <Button.Group style={{ display: "flex", justifyContent: "center", marginTop: "2em", marginBottom: "3em" }}>
            <Button icon="" style={{ minWidth: "20em", minHeight: "3em", background: "blue" }}>Swap</Button>
          </Button.Group>
      </div>
  );
}
