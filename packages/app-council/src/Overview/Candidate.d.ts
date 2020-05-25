import { AccountId, Balance } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    address: AccountId;
    balance?: Balance;
    voters?: AccountId[];
}
export default function Candidate({ address, balance, voters }: Props): React.ReactElement<Props>;
export {};
