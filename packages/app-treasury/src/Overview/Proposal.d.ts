import { DerivedTreasuryProposal } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    isMember: boolean;
    proposal: DerivedTreasuryProposal;
    onRespond: () => void;
}
export default function ProposalDisplay({ className, isMember, proposal: { council, id, proposal } }: Props): React.ReactElement<Props> | null;
export {};
