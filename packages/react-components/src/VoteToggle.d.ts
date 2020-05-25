import React from 'react';
interface Props {
    className?: string;
    onChange: (value: boolean) => void;
    value: boolean;
}
export default function VoteToggle({ className, onChange, value }: Props): React.ReactElement<Props>;
export {};
