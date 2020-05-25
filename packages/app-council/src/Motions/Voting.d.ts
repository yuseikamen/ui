import { Hash, Proposal, ProposalIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    hash: Hash;
    idNumber: ProposalIndex;
    isDisabled: boolean;
    members: string[];
    proposal: Proposal;
}
export default function Voting({ hash, idNumber, isDisabled, members, proposal }: Props): React.ReactElement<Props> | null;
export {};
