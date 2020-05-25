import { DerivedCollectiveProposal } from '@polkadot/api-derive/types';
import { ProposalIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    councilProposals: DerivedCollectiveProposal[];
    id: ProposalIndex;
    isDisabled: boolean;
}
export default function Submission({ councilProposals, id, isDisabled }: Props): React.ReactElement<Props> | null;
export {};
