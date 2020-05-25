import BN from 'bn.js';
import React from 'react';
interface Props {
    hash: string;
    proposalId: BN | number;
}
export default function Voting({ hash, proposalId }: Props): React.ReactElement<Props> | null;
export {};
