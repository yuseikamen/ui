import { DerivedTreasuryProposal } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    isApprovals?: boolean;
    proposals?: DerivedTreasuryProposal[];
}
export default function ProposalsBase({ className, isApprovals, proposals }: Props): React.ReactElement<Props>;
export {};
