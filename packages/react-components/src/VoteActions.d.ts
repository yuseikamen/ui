import React from 'react';
interface Props {
    accountId: string | null;
    className?: string;
    isDisabled?: boolean;
    onClick: () => void;
    params: any[];
    tx: string;
}
export default function VoteActions({ accountId, className, isDisabled, onClick, params, tx }: Props): React.ReactElement<Props>;
export {};
