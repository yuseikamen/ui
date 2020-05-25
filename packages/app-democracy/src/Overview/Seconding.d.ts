import { AccountId, Proposal } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    depositors: AccountId[];
    proposal?: Proposal;
    proposalId: BN | number;
}
export default function Seconding({ depositors, proposal, proposalId }: Props): React.ReactElement<Props> | null;
export {};
