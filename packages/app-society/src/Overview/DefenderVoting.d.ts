import React from 'react';
interface Props {
    isMember: boolean;
    ownMembers: string[];
}
export default function DefenderVoting({ isMember, ownMembers }: Props): React.ReactElement<Props>;
export {};
