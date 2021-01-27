// Copyright 2017-2020 @polkadot/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BN from 'bn.js';
import React, { useMemo } from 'react';

import type { ValidatorPrefs } from '@polkadot/types/interfaces';
import { AddressSmall } from '@polkadot/react-components';
import { useApi, useCall } from '@polkadot/react-hooks';
import FormatBalance from '@polkadot/app-generic-asset/FormatBalance';
import type { NominatedBy as NominatedByType, ValidatorInfo } from '../../types';
import type { NominatorValue } from './types';
import Status from './Status';
import { poolRegistry } from "@polkadot/app-staking/Overview/Address/poolRegistry";
import { STAKING_ASSET_NAME } from "@polkadot/app-generic-asset/assetsRegistry";
import { Vec, u32 } from '@cennznet/types';
import Account from "@polkadot/app-accounts/Account";

interface Props {
  address: string;
  className?: string;
  filterName?: string;
  hasQueries?: boolean;
  isElected?: boolean;
  isFavorite?: boolean;
  isMain?: boolean;
  lastBlock?: string;
  nominatedBy?: NominatedByType[];
  onlineCount?: false | BN;
  onlineMessage?: boolean;
  points?: string;
  toggleFavorite: (accountId: string) => void;
  validatorInfo?: ValidatorInfo;
  withIdentity?: boolean;
}

interface StakingState {
  commission?: string;
  nominators: NominatorValue[];
  stakeTotal?: BN;
  stakeOther?: BN;
  stakeOwn?: BN;
}

// function expandInfo ({ exposure, validatorPrefs }: ValidatorInfo): StakingState {
//   let nominators: NominatorValue[] = [];
//   let stakeTotal: BN | undefined;
//   let stakeOther: BN | undefined;
//   let stakeOwn: BN | undefined;
//
//   if (exposure) {
//     nominators = exposure.others.map(({ value, who }) => ({ nominatorId: who.toString(), value: value.unwrap() }));
//     stakeTotal = exposure.total.unwrap();
//     stakeOwn = exposure.own.unwrap();
//     stakeOther = stakeTotal.sub(stakeOwn);
//   }
//
//   const commission = (validatorPrefs as ValidatorPrefs)?.commission?.unwrap();
//
//   return {
//     commission: commission?.toHuman(),
//     nominators,
//     stakeOther,
//     stakeOwn,
//     stakeTotal
//   };
// }

function Address ({ address, className = '', filterName, hasQueries, isElected, isFavorite, isMain, lastBlock, nominatedBy, onlineCount, onlineMessage, points, toggleFavorite, validatorInfo, withIdentity }: Props): React.ReactElement<Props> | null {
  const { api } = useApi();

  let schema0 = 0;
  //let accounts: {address: string;tokens: number; property: string; tokenValue: number} = {};
  let accountList = [];
  const schemaMap = {0: '4/6 Kakariki',1:'563 Dominian street',2: '3 New Lynn street'};
  const issuer = address;
  let accountTokensByClass0: Vec<u32> = useCall<any>(api.query.nft.accountTokensByClass, [schema0, issuer]);
  const tokenNft0 = useCall<any>(api.query.nft.tokens, [0, 1]);
  if (accountTokensByClass0 && accountTokensByClass0.length > 0) {
      const noOftokens = accountTokensByClass0.length;
      const accounts = {};
      accounts.address = issuer;
      accounts.tokens = noOftokens;
      accounts.property = schemaMap[0];
  //     const tokenNft = useCall<any>(api.query.nft.tokens, [schema0, 0]);
      const tokenValue = tokenNft0 && tokenNft0.map((p)=> {
        let k = JSON.parse(p);
        return k["u128"];
      });
      accounts.tokenPrice = tokenValue && tokenValue[0];
      accounts.tokenValue = tokenValue && noOftokens * tokenValue[0];
      accountList.push(accounts);
  }

  // console.log('accountTokensByClass::',accountTokensByClass0?.toHuman());
  let accountTokensByClass1: Vec<u32> = useCall<any>(api.query.nft.accountTokensByClass, [1, issuer]);
  const tokenNft1 = useCall<any>(api.query.nft.tokens, [1, 1]);
  if (accountTokensByClass1 && accountTokensByClass1.length > 0) {
    const noOftokens = accountTokensByClass1.length;
    const accounts = {};
    accounts.address = address;
    accounts.tokens = noOftokens;
    accounts.property = schemaMap[1];
  //   const tokenNft = useCall<any>(api.query.nft.tokens, [schema0, 1]);
    const tokenValue = tokenNft1 && tokenNft1.map((p)=> {
      // console.log(p);
      let k = JSON.parse(p);
      return k["u128"];
    });
    accounts.tokenPrice = tokenValue && tokenValue[0];
    accounts.tokenValue = tokenValue && noOftokens * tokenValue[0];
    accountList.push(accounts);
  }
  // console.log('accountTokensByClass::',accountTokensByClass1?.toHuman());
  // console.log('Issuer:',issuer);
  let accountTokensByClass2: Vec<u32> = useCall<any>(api.query.nft.accountTokensByClass, [2, issuer]);
  const tokenNft2 = useCall<any>(api.query.nft.tokens, [2, 2]);
  if (accountTokensByClass2 && accountTokensByClass2.length > 0) {
    const noOftokens = accountTokensByClass2.length;
    const accounts = {};
    accounts.address = address;
    accounts.tokens = noOftokens;
    accounts.property = schemaMap[2];
  //   const tokenNft = useCall<any>(api.query.nft.tokens, [schema0, 2]);
    const tokenValue = tokenNft2 && tokenNft2.map((p)=> {
      // console.log(p);
      let k = JSON.parse(p);
      return k["u128"];
    });
    accounts.tokenPrice = tokenValue && tokenValue[0];
    accounts.tokenValue = tokenValue && noOftokens * tokenValue[0];
    accountList.push(accounts);
  }
  // console.log('accountList:::',accountList);
  // console.log('accountTokensByClass::',accountTokensByClass2?.toHuman());

  return (
    <tbody>
    { accountList.map(({ address, tokens, tokenPrice, property, tokenValue}): React.ReactNode => (
        <tr className={className}>
          <td className='address'>
            <AddressSmall value={address} />
          </td>
          <td className='address'>
            {property}
          </td>
          <td className='badge together'>
            {tokens}
          </td>
          <td className='badge together'>
            {tokenPrice}
          </td>
          <td style={{width:'15%', whiteSpace:'nowrap'}}>
            {tokenValue}
          </td>

        </tr>
      ))}
    </tbody>
  );
}

export default React.memo(Address);
