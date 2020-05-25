import BN from 'bn.js';
import React from 'react';
interface Props {
    accountId?: string | null;
    onChange: (value: BN) => void;
}
export default function VoteValue({ accountId, onChange }: Props): React.ReactElement<Props> | null;
export {};
