import { Hash, Proposal } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    proposal?: Proposal | null;
    proposalHash: Hash | string;
}
export default function ProposalCell({ className, proposal, proposalHash }: Props): React.ReactElement<Props>;
export {};
