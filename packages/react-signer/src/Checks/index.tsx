/* eslint-disable @typescript-eslint/camelcase */
// Copyright 2017-2019 @polkadot/react-signer authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { I18nProps } from '@polkadot/react-components/types';
import { DerivedFees, DerivedBalances, DerivedContractFees } from '@polkadot/api-derive/types';
import { IExtrinsic } from '@polkadot/types/types';
import { ExtraFees } from './types';
import BN from 'bn.js';
import React, { useContext, useState, useEffect } from 'react';
import { Compact, UInt } from '@cennznet/types';
import { ApiContext, withCalls} from '@polkadot/react-api';
import { Icon } from '@polkadot/react-components';
import { compactToU8a, stringToU8a, formatBalance } from '@polkadot/util';
import { decodeAddress } from '@polkadot/keyring';
import { u32 } from '@cennznet/types';
import { xxhashAsHex, blake2AsHex } from '@polkadot/util-crypto';
import translate from '../translate';
import ContractCall from './ContractCall';
import ContractDeploy from './ContractDeploy';
import Proposal from './Proposal';
import Transfer from './Transfer';
import { MAX_SIZE_BYTES, MAX_SIZE_MB, ZERO_FEES_BALANCES, ZERO_FEES_CONTRACT } from './constants';

interface State {
  allFees: BN;
  allTotal: BN;
  allWarn: boolean;
  extMethod?: string;
  extSection?: string;
  hasAvailable: boolean;
  isRemovable: boolean;
  isReserved: boolean;
  overLimit: boolean;
  balance: BN;
  spendBalance: BN
}

interface Props extends I18nProps {
  // balances_fees?: DerivedFees;
 // balances_all?: any;
  transactionByteFee?: BN,
  transactionBaseFee?: BN,
  contract_fees?: DerivedContractFees;
  token_balance?: any,
  spending_balance?: any,
  accountId?: string | null;
  accountKeyToken?: string | null,
  accountKeySpending?: string | null,
  assetId?: BN | number;
  extrinsic?: IExtrinsic | null;
  isSendable: boolean;
  onChange?: (hasAvailable: boolean) => void;
  system_accountNonce?: BN,
  tip?: BN;
}

const LENGTH_ADDRESS = 32 + 1; // publicKey + prefix
const LENGTH_ERA = 2; // assuming mortals
const LENGTH_SIGNATURE = 64; // assuming ed25519 or sr25519
const LENGTH_VERSION = 1; // 0x80 & version
const ZERO = new BN(0);
const SIGNATURE_SIZE = LENGTH_ADDRESS + LENGTH_SIGNATURE + LENGTH_ERA;

export const calcTxLength = (extrinsic?: IExtrinsic | null, nonce?: BN, tip?: BN): BN => {
  return new BN(
    LENGTH_VERSION +
    LENGTH_ADDRESS +
    LENGTH_SIGNATURE +
    LENGTH_ERA +
    compactToU8a(nonce || 0).length +
    compactToU8a(tip || 0).length +
    (extrinsic ? extrinsic.encodedLength : 0)
  );
};

export function FeeDisplay ({ accountId, token_balance, spending_balance, transactionByteFee = new BN(0), transactionBaseFee = new BN(0), system_accountNonce = new BN(0), className, contract_fees = ZERO_FEES_CONTRACT, extrinsic, isSendable, onChange, t, tip, assetId }: Props): React.ReactElement<Props> | null {
  const { api } = useContext(ApiContext);
  const [state, setState] = useState<State>({
    allFees: ZERO,
    allTotal: ZERO,
    allWarn: false,
    hasAvailable: false,
    isRemovable: false,
    isReserved: false,
    overLimit: false,
    balance: new BN(0),
    spendBalance: new BN(0)
  });
  const [extra, setExtra] = useState<ExtraFees>({
    extraAmount: ZERO,
    extraFees: ZERO,
    extraWarn: false,
  });
  // let allTotal: BN,hasAvailable: boolean, isRemovable: boolean,isReserved: boolean,allWarn: boolean, overLimit: boolean;

  useEffect((): void => {
    if (!accountId || !extrinsic) {
      return;
    }

   let tokenBalance = token_balance ? new BN(token_balance.unwrapOr(0)) : new BN(0);
   let spendingBalance = spending_balance ? new BN(spending_balance.unwrapOr(0)) : new BN(0);
   console.log('SpendingBalance:', spendingBalance.toNumber());
    const fn = api.findCall(extrinsic.callIndex);
    const extMethod = fn.method;
    const extSection = fn.section;
    const txLength = SIGNATURE_SIZE + compactToU8a(system_accountNonce).length + (
      extrinsic
        ? extrinsic.encodedLength
        : 0
    );
    //const txLength = calcTxLength(extrinsic, balances_all.accountNonce, tip);
    // const txLength = SIGNATURE_SIZE + compactToU8a(system_accountNonce).length + (
    //   extrinsic
    //     ? extrinsic.encodedLength
    //     : 0
    // );
    const isSameExtrinsic = state.extMethod === extMethod && state.extSection === extSection;
    const extraAmount = isSameExtrinsic
      ? extra.extraAmount
      : ZERO;
    const extraFees = isSameExtrinsic
      ? extra.extraFees
      : ZERO;
    const extraWarn = isSameExtrinsic
      ? extra.extraWarn
      : false;
    const allFees = extraFees
      .add(transactionBaseFee)
      .add(transactionByteFee.muln(txLength));

     const allTotal = extraAmount.add(allFees);
    // const hasAvailable = balances_all.availableBalance.gtn(0);
    // const isRemovable = balances_all.votingBalance.sub(allTotal).lt(balances_fees.existentialDeposit);
    // const isReserved = balances_all.freeBalance.isZero() && balances_all.reservedBalance.gtn(0);
     const hasAvailable = spendingBalance.gte(allFees) && tokenBalance.gte(extraAmount);
     const isRemovable = false; // TODO
     const isReserved = false; // TODO
     const allWarn = extraWarn;
     const overLimit = txLength >= MAX_SIZE_BYTES;

    onChange && onChange(hasAvailable);
  // }, [accountId, extra, extrinsic, tip]);
    setState({
      allFees,
      allTotal,
      allWarn,
      extMethod,
      extSection,
      hasAvailable,
      isRemovable,
      isReserved,
      overLimit,
      balance: tokenBalance,
      spendBalance: spendingBalance
    });
   }, [accountId, extra, extrinsic, tip]);

  if (!accountId) {
    return null;
  }
  console.log('Inside check... ****');

//  const { allFees, allTotal, allWarn, extMethod, extSection, hasAvailable, isRemovable, isReserved, overLimit } = state;
  // const { accountId, className, isSendable, t, assetId } = props;
  const { allFees, allWarn, hasAvailable, isRemovable, isReserved, overLimit, balance, spendBalance, extMethod, extSection } = state;
  // const { assetId } = props;
  console.log('Balance:',balance.toNumber());
  console.log('spendBalance:',spendBalance.toNumber());
  const feeClass = !hasAvailable || overLimit || isRemovable
    ? 'error'
    : allWarn
      ? 'warning'
      : 'normal';

  // display all the errors, warning and information messages (in that order)
  return (
    <article
      className={[className, feeClass, 'padded'].join(' ')}
      key='txinfo'
    >
      {!isSendable && (
        <div>
          <Icon name='ban' />
          {t('The selected account does not exist on your keyring')}
        </div>
      )}
      {!hasAvailable && (
        <div>
          <Icon name='ban' />
          {t('The selected account does not have the required balance available for this transaction')}
        </div>
      )}
      {overLimit && (
        <div>
          <Icon name='ban' />
          {t(`This transaction will be rejected by the node as it is greater than the maximum size of ${MAX_SIZE_MB}MB`)}
        </div>
      )}
      {
        balance && assetId && <div title={balance.toString()}><Icon name='arrow right' />{`Asset ID: ${assetId.toString()} - Balance: ${formatBalance(balance)}`}</div>
      }
      <div title={spendBalance.toString()}><Icon name='arrow right' />{`CENTRAPAY - Balance: ${formatBalance(spendBalance)}`}</div>

      {extrinsic && (
        <>
          {(extSection === 'genericAsset' && extMethod === 'transfer') && (
            <Transfer
              assetId={extrinsic.args[2]}
              amount={extrinsic.args[1]}
              fees={{ ...ZERO_FEES_BALANCES, transactionBaseFee, transactionByteFee }}
              recipientId={extrinsic.args[0]}
              onChange={setExtra}
            />
          )}
          {(extSection === 'democracy' && extMethod === 'propose') && (
            <Proposal
              deposit={extrinsic.args[1]}
              fees={{ ...ZERO_FEES_BALANCES, transactionBaseFee, transactionByteFee }}
              onChange={setExtra}
            />
          )}
          {(extSection === 'contract') && (
            <>
              {(extMethod === 'call') && (
                <ContractCall
                  endowment={extrinsic.args[1] as unknown as Compact<UInt>}
                  fees={contract_fees}
                  onChange={setExtra}
                />
              )}
              {(extMethod === 'create') && (
                <ContractDeploy
                  endowment={extrinsic.args[0] as unknown as Compact<UInt>}
                  fees={contract_fees}
                  onChange={setExtra}
                />
              )}
            </>
          )}
        </>
      )}
      {isReserved && (
        <div>
          <Icon name='arrow right' />
          {t('This account does have a reserved/locked balance, not taken into account')}
        </div>
      )}
      <div>
        <Icon name='arrow right' />
        {t('Fees includes the transaction fee and the per-byte fee')}
      </div>
      <div><Icon name='arrow right' />{t('Fees totalling {{fees}} unit of CENTRAPAY will be applied to the submission', {
        replace: {
          fees: formatBalance(allFees)
        }
      })}</div>
    </article>
  );
}

// const generateKey = (addr: string | null | undefined, token: any) => {
//   if (!addr || !token) {
//     return '0x';
//   }
//   const prefix = stringToU8a('GenericAsset FreeBalance');
//   const assetIdEncoded = new u32(token.toBn ? token.toBn() : token).toU8a();
//   const keyEncoded = new Uint8Array(prefix.length + assetIdEncoded.length);
//   keyEncoded.set(prefix);
//   keyEncoded.set(assetIdEncoded, prefix.length);
//   const addrEncoded = xxhashAsHex(decodeAddress(addr), 128).substr(2);
//   console.log('GENERATE KEY...');
//   console.log('KEY:',blake2AsHex(keyEncoded, 256) + addrEncoded);
//   return blake2AsHex(keyEncoded, 256) + addrEncoded;
// };

const getAssetId = (props: Props): BN | number => {
  if (!props.extrinsic) {
    return 0;
  }
  const { api } = useContext(ApiContext);
  const fn = api.findCall(props.extrinsic.callIndex);
  const extMethod = fn.method;
  const extSection = fn.section;
  console.log('EXT section:',extSection);
  console.log('EXT method:',extMethod);
  if (extSection !== 'genericAsset' || extMethod !== 'transfer') {
    return 0;
  }

  const [assetId] = props.extrinsic.args;

  return assetId as any;
};

// const mapProps = (props: Props): Props => {
//   const assetId = getAssetId(props);
//   return {
//     ...props,
//     accountKeyToken: generateKey(props.accountId, assetId),
//     accountKeySpending: generateKey(props.accountId, 16001), // TODO: read from chain
//     assetId
//   };
// };

// const withKeys = (Component: React.ComponentType<Props>) => (props: Props) => <Component {...mapProps(props)}/>;

export default translate(
  // withKeys(
  withCalls<Props>(
   // ['query.fees.transactionBaseFee', { propName: 'transactionBaseFee' }],
   // ['query.fees.transactionByteFee', { propName: 'transactionByteFee' }],
    ['rpc.state.getStorage', { paramName: 'accountKeyToken', propName: 'token_balance' }],
    ['rpc.state.getStorage', { paramName: 'accountKeySpending', propName: 'spending_balance' }],
   // ['query.genericAsset.freeBalance', { paramName: ['assetId', 'accountId']  }],
    ['query.system.accountNonce', { paramName: 'accountId' }]
  )(FeeDisplay)
//  )
);
