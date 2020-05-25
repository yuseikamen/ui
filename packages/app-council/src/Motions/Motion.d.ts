import { DerivedCollectiveProposal } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    isMember: boolean;
    members: string[];
    motion: DerivedCollectiveProposal;
}
export default function Motion({ className, isMember, members, motion: { hash, proposal, votes } }: Props): React.ReactElement<Props> | null;
export {};
