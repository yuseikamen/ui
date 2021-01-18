// Copyright 2017-2020 @polkadot/app-staking authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.


import React, {useEffect, useMemo, useState} from 'react';
import {BareProps} from "@polkadot/react-components/types";
import {
    InputAddress,
    Table,
    AddressSmall,
    Button,
    HelpOverlay,
    Icon,
    InputBalance,
    TxButton
} from "@polkadot/react-components";
import {useTranslation} from "@polkadot/app-staking/translate";
import {useApi, useCall} from "@polkadot/react-hooks";
import type { DeriveStakingElected } from '@polkadot/api-derive/types';
import FormatBalance from '@polkadot/app-generic-asset/FormatBalance';
import {poolRegistry} from "@polkadot/app-staking/Overview/Address/poolRegistry";
import {STAKING_ASSET_NAME} from "@polkadot/app-generic-asset/assetsRegistry";
import Available from "@polkadot/app-generic-asset/Available";
import BN from "bn.js";
import {AssetId, Balance, Codec} from "@cennznet/types";
import { SubmittableExtrinsic } from '@polkadot/api/promise/types';
import basicMd from '../md/basic.md';

interface Props extends BareProps {
  isVisible: boolean;
}


export default function Actions ({ className, isVisible }: Props): React.ReactElement<Props> {
    const { api } = useApi();
    const electedInfo = useCall<DeriveStakingElected>(api.derive.staking.electedInfo);

    const chainInfo = useCall<string>(api.rpc.system.chain, []);
    const [stashAccountId, setStashAccountId] = useState<string | null | undefined>();
    const [assetBalance, setAssetBalance] = useState<BN>(new BN(0));
    const stakingAssetId = useCall<AssetId>(api.query.genericAsset.stakingAssetId as any, []);
    const [extrinsic, setExtrinsic] = useState<SubmittableExtrinsic | null>(null);
    const [rewardDestinationId, setRewardDestinationId] = useState<string | null | undefined>();
    const [accountIdVec, setAccountIdVec] = useState<string[]>([]);
    const chain: string | undefined = chainInfo ? chainInfo.toString() : undefined;
    const [ isValid, setIsValid] = useState<boolean>(false);
    const [ openHelpDailog, setOpenHelpDailog] = useState<boolean>(false);
    const [hasAvailable, setHasAvailable] = useState(true);
    const [amount, setAmount] = useState<BN | undefined>(new BN(0));
    useMemo((): void => {
        if (stakingAssetId && stashAccountId) {
            api.query.genericAsset.freeBalance(stakingAssetId, stashAccountId!).then(
                (balance: Codec) => setAssetBalance((balance as Balance).toBn())
            );
        }
    }, [stakingAssetId]);
    useEffect((): void => {
        if (accountIdVec.length === 0 || stashAccountId === null || rewardDestinationId === null || amount?.isZero() || amount?.gte(assetBalance)) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
        if (amount !== undefined && !amount!.isZero()) {
            setHasAvailable(amount.lte(assetBalance));
        } else {
            setHasAvailable(true);
        }
    }, [stashAccountId, rewardDestinationId, amount, accountIdVec]);

    // create an extrinsic if we have correct values
    useEffect((): void => {
        if (isValid) {
            const txs = [];
            const bondTx = api.tx.staking.bond(stashAccountId as string, amount as BN, { Account: rewardDestinationId});
            const nominateTx = api.tx.staking.nominate(accountIdVec);
            txs.push(bondTx);
            txs.push(nominateTx);
            setExtrinsic(api.tx.utility.batch(txs));
        }
    }, [isValid]);

    const _validatorSelected = (element: any): void => {
        const accountSelected: string = element.currentTarget.value;
        const accounts: string[] = accountIdVec;
        if (element.target.checked && accountSelected) {
            accounts.push(accountSelected);
        } else if (!element.target.checked && accounts.includes(accountSelected)) {
            const index = accounts.indexOf(accountSelected);
            if (index > -1) {
                accounts.splice(index, 1);
            }
        }
        setAccountIdVec(accounts);
        if (accountIdVec.length === 0 || stashAccountId === null || rewardDestinationId === null || amount?.isZero() || amount?.gte(assetBalance)) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }
    const { t } = useTranslation();
    const transferrable = <span className='label'>{t('transferrable')}</span>;
    const notEnoughTransferrable = <span style={{ color: "#9f3a38" }}>{t('not enough to stake')}</span>;
    const _openHelp = (): void => setOpenHelpDailog(true);
    const _closeHelp = (): void => setOpenHelpDailog(false);
    return (
          <div>
            <HelpOverlay md={basicMd} initialVisibility={openHelpDailog} closeHelp={_closeHelp}/>
            <div className={`${className} ${!isVisible && 'staking--hidden'}`} style={{fontSize:'24px', color:'black'}}>
              Stake <b>CENNZ</b> and nominate the best validators to earn <b>Cpay</b> rewards
            </div>
            <Button
                  style={{marginTop:'1%', backgroundColor: '#f19135'}}
                  label={t('Know the risks')}
                  icon='exclamation'
                  onClick={_openHelp}
                  isPrimary
            />
            <div className='extrinsics--Selection' style={{marginTop:'2%', width:'50%', borderRadius: '35px', padding: '20px', border: '2px solid #D0D0D0', background:'white'}}>
                <div className='menuActive'>
                    <Icon name={'users'} size='huge' color={'black'}/>
                    <span>{'new nominator'}</span>
                </div>
                <InputAddress
                    label={t('Stash')}
                    help={t('Choose an account to stake CENNZ with')}
                    labelExtra={<Available label={transferrable} params={stashAccountId} />}
                    onChange={setStashAccountId}
                    type='account'
                />
                <InputAddress
                    label={t('Reward to')}
                    help={t('Choose an account where Cpay rewards will be paid')}
                    labelExtra={<Available label={transferrable} params={rewardDestinationId} />}
                    onChange={setRewardDestinationId}
                    type='allPlus'
                />
                <InputBalance
                    help={t('The amount of CENNZ to put at stake')}
                    label={t('Stake')}
                    labelExtra={!hasAvailable && notEnoughTransferrable}
                    onChange={setAmount}
                />
                <div>
                    Select validators to nominate
                  <Table>
                    <Table.Body>
                      {electedInfo?.info.map(({ accountId, exposure, validatorPrefs }): React.ReactNode => (
                        <tr className={className} key={accountId.toString()}>
                          <td className='address'>
                            <AddressSmall value={accountId.toString()} />
                          </td>
                          <td className='address'>
                            {chain? poolRegistry[chain][accountId.toString()]: 'CENTRALITY'}
                          </td>
                          <td>
                            {validatorPrefs["commission"].toHuman()}
                          </td>
                          <td style={{width:'15%', whiteSpace:'nowrap'}}>
                            {exposure.total?.toBn()?.gtn(0) && (
                              <FormatBalance value={exposure.total} symbol={STAKING_ASSET_NAME}/>)}
                          </td>
                          <td>
                            <input
                              type={"checkbox"}
                              value={accountId.toString()}
                              onClick={_validatorSelected}
                            />
                          </td>
                        </tr>
                      ))}
                    </Table.Body>
                  </Table>
                  <div style={{marginLeft:'45%'}}>
                    <TxButton
                      accountId={stashAccountId}
                      extrinsic={extrinsic}
                      icon='check'
                      isDisabled={!isValid}
                      isPrimary
                      label={t('nominate')}
                    />
                  </div>
                </div>
            </div>
          </div>

      );
}
