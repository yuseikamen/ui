import { PropIndex, Proposal } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    proposal?: Proposal;
    referendumId: PropIndex;
}
export default function Voting({ proposal, referendumId }: Props): React.ReactElement<Props> | null;
export {};
