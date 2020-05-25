import { DerivedCollectiveProposal } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    councilProposals: DerivedCollectiveProposal[];
    isDisabled?: boolean;
}
export default function Voting({ councilProposals, isDisabled }: Props): React.ReactElement<Props> | null;
export {};
