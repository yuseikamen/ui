import { SubmittableExtrinsic } from '@polkadot/api/promise/types';
import { DerivedFees, DerivedBalancesAll, DerivedContractFees } from '@polkadot/api-derive/types';
import { IExtrinsic } from '@polkadot/types/types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    balances_fees?: DerivedFees;
    balances_all?: DerivedBalancesAll;
    contract_fees?: DerivedContractFees;
    accountId?: string | null;
    className?: string;
    extrinsic?: SubmittableExtrinsic | null;
    isSendable: boolean;
    onChange?: (hasAvailable: boolean) => void;
    tip?: BN;
}
export declare const calcTxLength: (extrinsic?: IExtrinsic | null | undefined, nonce?: BN | undefined, tip?: BN | undefined) => BN;
export declare function FeeDisplay({ accountId, balances_all, balances_fees, className, contract_fees, extrinsic, isSendable, onChange, tip }: Props): React.ReactElement<Props> | null;
export default function Checks({ accountId, className, extrinsic }: Props): React.ReactElement<Props> | null;
export {};
