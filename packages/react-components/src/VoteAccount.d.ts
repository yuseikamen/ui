import React from 'react';
interface Props {
    className?: string;
    filter?: string[];
    onChange: (value: string | null) => void;
}
export default function VoteAccount({ className, filter, onChange }: Props): React.ReactElement<Props>;
export {};
