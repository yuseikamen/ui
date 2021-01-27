// Copyright 2017-2020 @polkadot/app-staking authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React, {useEffect, useMemo, useState} from 'react';
import { BareProps } from "@polkadot/react-components/types";
import {
  InputAddress,
  Table,
  AddressSmall,
  Button,
  HelpOverlay,
  Icon,
  InputBalance,
  TxButton, Dropdown
} from "@polkadot/react-components";
import { useTranslation } from "@polkadot/app-staking/translate";
import { useAccounts, useApi, useCall } from "@polkadot/react-hooks";
import type { DeriveStakingElected } from '@polkadot/api-derive/types';
import FormatBalance from '@polkadot/app-generic-asset/FormatBalance';
import { STAKING_ASSET_NAME } from "@polkadot/app-generic-asset/assetsRegistry";
import BN from "bn.js";
import { AssetId, Balance, Codec, AccountId } from "@cennznet/types";
import { Option } from '@polkadot/types';
import { SubmittableExtrinsic } from '@polkadot/api/promise/types';
import styled from 'styled-components';
import basicMd from '../md/basic.md';
import { colors } from '../../../../styled-theming';
import AccountCheckingModal from "@polkadot/app-accounts/modals/AccountsForStaking";

interface Props extends BareProps {
  isVisible: boolean;
}

function OnboardNominators ({ className, isVisible }: Props): React.ReactElement<Props> {
    const { api } = useApi();
    // const minimumBond = useCall<Balance>(api.query.staking.minimumBond);
    const [stashAccountId, setStashAccountId] = useState<string | null | undefined>();
    const [buyerAccountId, setBuyerAccountId] = useState<string | null | undefined>();
    const [assetBalance, setAssetBalance] = useState<BN>(new BN(0));
    const stakingAssetId = useCall<AssetId>(api.query.genericAsset.stakingAssetId as any, []);
    const [extrinsic, setExtrinsic] = useState<SubmittableExtrinsic | null>(null);const [isValid, setIsValid] = useState<boolean>(false);
    const [openHelpDailog, setOpenHelpDailog] = useState<boolean>(false);
    const [tokenList, setTokenList] = useState();
    //const [amount, setTokenAmount] = useState<BN | undefined>(new BN(0));
    const [action, setAction] = useState<number | undefined>();
    const [token, setToken] = useState<number | undefined>();
    const [classSchema, setClassSchema] = useState<number | undefined>();
    useEffect((): void => {
        if (stakingAssetId && stashAccountId) {
            api.query.genericAsset.freeBalance(stakingAssetId, stashAccountId).then(
                (balance: Codec) => setAssetBalance((balance as Balance).toBn())
            );
        }
    }, [stakingAssetId, stashAccountId]);
    useEffect((): void => {
        console.log('8888:',token);
        if (stashAccountId === null || classSchema === null || token === null || action === null ) {
          setIsValid(false);
        } else {
          setIsValid(true);
        }
    }, [stashAccountId, classSchema, token, action]);

    // create an extrinsic if we have correct values
    useEffect((): void => {
        if (isValid ) {
            const txs = [];
            // console.log('stashAccountId:',stashAccountId);
            // console.log('classSchema:',classSchema);
            // console.log('token:', token);
            // console.log('action:', action);
            // console.log('buyer:', buyerAccountId);
            if (action === 0) {

            } else if (action === 1) {
              setExtrinsic(api.tx.nft.sellToken(classSchema, token, buyerAccountId));
            }
        }
    }, [isValid, stashAccountId, classSchema, token, action, buyerAccountId]);

    const { t } = useTranslation();
    // const tokenList: unknown[] = [];

    const BuySell = [{value: 0, text: t('Buy')},{value: 1, text: t('Sell')}];
    useEffect((): void => {
      console.log('classSchema::',classSchema);
      if (classSchema !== undefined) {
        api.query.nft.nextTokenId(classSchema).then(
          (tokenId) => {
            console.log('tokenId:',tokenId);
            const tokenList = [];
            for (let i = 0; i <= tokenId.toNumber(); i++) {
              const obj = {value: i, text: `class ${classSchema} token ${i}`};
              tokenList.push(obj);
            }
            setTokenList(tokenList);
            //console.log('tokenList::',tokenList);
          }
        );
      }
    }, [classSchema]);

    const available = <span className='label'>{t('available')}</span>;
    const _closeHelp = (): void => setOpenHelpDailog(false);

    // If user has no accounts then open a pop-up to create account /manage stake will appear
    const { allAccounts, hasAccounts } = useAccounts();
    const listAlreadyBonded = useCall<[]>(api.query.staking.bonded.multi, [allAccounts]);
    const controllersBonded = listAlreadyBonded?.map((account:Option<AccountId>)=> account.toString());
    const stashesBonded = listAlreadyBonded?.map((account:Option<AccountId>, index) => account.isSome ? allAccounts[index] : null);
    const filteredList = controllersBonded && allAccounts ? allAccounts.filter(account => !controllersBonded.includes(account) && !stashesBonded?.includes(account)) : [];
    // const filteredOption: KeyringSectionOption[] = filteredList.map((address) => ({ key: address, name: address, value: address }));
    let openAccountCheckingModal = false;
    if (api.isReady && controllersBonded && (!hasAccounts || filteredList.length==0)) {
      openAccountCheckingModal = true;
    }

    const schema = [{value: 0, text: t('4/6 Kakariki')},{value: 1, text: t(' 563 Dominian street')},{value: 2, text: t(' 3 New Lynn street')}];

    return (
          <div className={className}>
            {openAccountCheckingModal && (
              <AccountCheckingModal/>
            )}
            <HelpOverlay md={basicMd} openHelpDailog={openHelpDailog} closeHelp={_closeHelp}/>
            <div className='header'>
              <b>TRADE YOUR PROPERTY TOKENS</b>
            </div>

            <div className='nominator--Selection'>
                <div className='menuActive'>
                    <Icon name={'exchange'} size='big' color={'black'}/>
                  <span className='label'><b>{'Blockchain your REAL ESTATE'}</b></span>
                </div>
                <InputAddress
                    label={t('Owner')}
                    help={t('Choose an account to issue your investment property with')}
                    labelExtra={!openAccountCheckingModal && <FormatBalance label={available} value={assetBalance} symbol={STAKING_ASSET_NAME}/>}
                    onChange={setStashAccountId}
                    type='account'
                />
                <Dropdown
                  // defaultValue={url}
                  help={'Select schema'}
                  label={'Select schema'}
                  onChange={setClassSchema}
                  // onChange={_onChangeUrl}
                  options={schema}
                />
              <Dropdown
                // defaultValue={url}
                help={'Select Token'}
                label={'Select Token'}
                onChange={setToken}
                // onChange={_onChangeUrl}
                options={tokenList}
              />
              <Dropdown
                // defaultValue={url}
                help={'Action'}
                label={'Trade'}
                onChange={setAction}
                // onChange={_onChangeUrl}
                options={BuySell}
              />
              {action === 1 &&
              <InputAddress
                label={t('Buyer')}
                // options={filteredOption}
                // defaultValue={filteredOption[0] ? filteredOption[0].value : null}
                help={t('Choose an account to sell your investment property to')}
                // labelExtra={!openAccountCheckingModal && <FormatBalance label={available} value={assetBalance} symbol={STAKING_ASSET_NAME}/>}
                onChange={setBuyerAccountId}
                type='allPlus'
              />
              }
              <div className='submitTx'>
              <TxButton
                accountId={stashAccountId}
                extrinsic={extrinsic}
                icon='check'
                isDisabled={!isValid}
                isPrimary
                label={t('Trade')}
              />
              </div>
            </div>
          </div>
    );
}
export default styled(OnboardNominators)`
  .header {
    font-size: 22px;
    margin-top: 3rem;
    margin-left: 1.2rem;
    color: ${colors.N1000};
  }

  .ui.primary.button.know-risk {
    margin-top: 1.5rem;
    margin-left: 1.2rem;
    background-color: ${colors.highlightedOrange} !important;
  }

  .nominator--Selection {
    min-width: 663px;
    margin-top: 1.5rem;
    width: 50%;
    border-radius: 35px;
    padding: 20px 3.8rem 20px 20px;
    background: ${colors.N0};
  }

  .menuActive {
    margin-bottom: 2rem;
    i.big.icon, i.big.icons {
      font-size: 3rem;
    }
    .label {
      margin-left: 1rem;
      font-size: 22px;
      font-weight: 100;
    }
  }

  .submitTx {
      margin-left: 40%;
    }

  .validator-info {
    margin-top: 3rem;
    padding-left: 2rem;
    th {
      background: ${colors.N0};
      color: ${colors.matterhorn};
      text-align: left;
      font-size: 15px;
    }
    .label {
      font-size: 18px;
      font-weight: 100;
      margin-bottom: 2rem;
    }
    .submitTx {
      margin-left: 40%;
    }
    .checkbox {
      width:  20px;
      height: 20px;
      border:2px solid #555;
      cursor: pointer;
    }
  }
`;
