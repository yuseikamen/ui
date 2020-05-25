import { DeriveSocietyCandidate } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    allMembers: string[];
    isMember: boolean;
    ownMembers: string[];
    value: DeriveSocietyCandidate;
}
export default function Candidate({ allMembers, isMember, ownMembers, value: { accountId, kind, value } }: Props): React.ReactElement<Props>;
export {};
