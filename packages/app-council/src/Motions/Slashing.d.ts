import React from 'react';
interface Props {
    className?: string;
    isMember: boolean;
    members: string[];
}
export default function Slashing({ className, isMember, members }: Props): React.ReactElement<Props>;
export {};
