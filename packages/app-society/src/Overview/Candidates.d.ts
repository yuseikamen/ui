import { OwnMembers } from '../types';
import React from 'react';
interface Props extends OwnMembers {
    className?: string;
}
export default function Candidates({ allMembers, className, isMember, ownMembers }: Props): React.ReactElement<Props>;
export {};
