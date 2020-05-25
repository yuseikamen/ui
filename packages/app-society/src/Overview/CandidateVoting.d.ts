import React from 'react';
interface Props {
    candidateId: string;
    isMember: boolean;
    ownMembers: string[];
}
export default function CandidateVoting({ candidateId, isMember, ownMembers }: Props): React.ReactElement<Props>;
export {};
