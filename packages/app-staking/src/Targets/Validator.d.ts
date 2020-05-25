import { ValidatorInfo } from './types';
import React from 'react';
interface Props {
    info: ValidatorInfo;
    toggleFavorite: (accountId: string) => void;
}
export default function Validator({ info: { accountId, bondOther, bondOwn, bondTotal, commissionPer, isCommission, isFavorite, isNominating, key, numNominators, rankOverall, rewardPayout, validatorPayment }, toggleFavorite }: Props): React.ReactElement<Props>;
export {};
