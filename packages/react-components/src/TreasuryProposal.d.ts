import { TreasuryProposal as TreasuryProposalType } from '@polkadot/types/interfaces';
import React from 'react';
import { InsetProps } from './Inset';
interface Props {
    className?: string;
    asInset?: boolean;
    insetProps?: Partial<InsetProps>;
    onClick?: () => void;
    proposalId?: string;
    proposal?: TreasuryProposalType | null;
    withLink?: boolean;
}
export default function TreasuryProposal({ className, asInset, insetProps, onClick, proposal, proposalId }: Props): React.ReactElement<Props> | null;
export {};
