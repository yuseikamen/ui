import React from 'react';
interface Props {
    approvalCount?: number;
    proposalCount?: number;
}
export default function Summary({ approvalCount, proposalCount }: Props): React.ReactElement<Props>;
export {};
