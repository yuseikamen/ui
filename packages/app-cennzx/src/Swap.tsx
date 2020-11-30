// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import React, { useEffect, useState } from 'react';
import { Button, Dropdown, InputAddress, InputBalance, TxButton } from '@polkadot/react-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCartArrowDown, faRandom } from '@fortawesome/free-solid-svg-icons';
import { toFormattedBalance } from "@polkadot/react-components/util";
import { AppProps as Props } from '@polkadot/react-components/types';
import { useApi, useCall } from '@polkadot/react-hooks';
import { u8aToString } from '@polkadot/util';

var buyRate = new BN(123);
var sellRate = new BN(444);

interface Option {
  text: string;
  value: string;
}

export default function Transfer(): React.ReactElement<Props> {
  const [amount1, setAmount1] = useState<BN | string>("");
  const [amount2, setAmount2] = useState<BN | string>("");
  const [isBuy, setIsBuy] = useState<boolean>(true);
  const [assetId, setAssetId] = useState('0');
  const [options, setOptions] = useState<Option[]>();
  const [options2, setOptions2] = useState<Option[]>();
  const [recipientId, setRecipientId] = useState<string | null>(null);

  // Treat {value} as a sell so set amount2 automatically
  function setAmount1_(value: BN | undefined): void {
    setAmount1(value || new BN(0));
    if (isBuy) {
      setAmount2((value || new BN(0)).mul(buyRate));
    }
  }

  // Treat {value} as a buy so set amount1 automatically
  function setAmount2_(value: BN | undefined): void {
    setAmount2(value || new BN(0))
    if (!isBuy) {
      setAmount1((value || new BN(0)).mul(sellRate));
    }
  }

  const { api } = useApi();

  // Query registered assets
  useEffect((): void => {
    //@ts-ignore
    api.rpc.genericAsset.registeredAssets().then(
      (assets: any) => {
        const dropdownOptions: Option[] = assets && assets.length > 0 && assets.map((asset: any) => {
          const [assetId, assetInfo] = asset;
          return {
            text: u8aToString(assetInfo.symbol),
            value: assetId.toString()
          };
        });

        setOptions(dropdownOptions);
        setOptions2(dropdownOptions);
        setAssetId(dropdownOptions[0].value || "?");
      });
  }, []);

  return (
      <div style={{ display: "flexbox", textAlign: "center", justifyContent: "center" }}>
          <h1 style={{ fontFamily: "Arial", textTransform: "uppercase", fontWeight: "bold" , marginBottom: "1em", boxShadow: "0 1px 2px -2px gray" }}>CENNZX</h1>
          <InputAddress
            style={{ paddingRight: "2rem", marginTop: "1em", marginLeft: "auto", marginRight: "auto" }}
            label='Account'
            onChange={setRecipientId}
            type='all'
          />
          <InputBalance
            style={{ marginTop: "1em", marginLeft: "auto", marginRight: "auto", paddingRight: "2rem", minWidth: "90%" }}
            onChange={setAmount1_}
            onClick={() => setIsBuy(true)}
            value={amount1}
            label={"From"}
            labelExtra={<p>Balance: 2,300,000.0000</p>}
            defaultValue={""}
            isZeroable={true}
            placeholder={"0.0"}
          />
          <FontAwesomeIcon icon={faCaretDown} size="lg" style={{ marginTop: "1em", color: "#f19135" }}/>
          <InputBalance
            // style={{ maxWidth: "90%", marginTop: "1em", marginLeft: "auto", marginRight: "auto", paddingRight: "2rem" }}
            style={{ marginTop: "1em", marginLeft: "auto", marginRight: "auto", paddingRight: "2rem", minWidth: "90%" }}
            onChange={setAmount2_}
            onClick={() => setIsBuy(false)}
            value={amount2}
            label={"To"}
            labelExtra={<p>Balance: 1,900,000.1000</p>}
            defaultValue={""}
            isZeroable={true}
            placeholder={"0.0"}
          />
          <p style={{marginTop: "1em"}}>Price: 1.32 CENNZ per Cpay</p>
          <Button.Group style={{ display: "flex", justifyContent: "center", marginTop: "2em", marginBottom: "3em" }}>
            <Button icon="" style={{ minWidth: "20em", minHeight: "3em", background: "blue" }}>Swap</Button>
          </Button.Group>
      </div>
  );
}
