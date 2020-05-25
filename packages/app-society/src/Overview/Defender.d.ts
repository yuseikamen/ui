import { DeriveSociety } from '@polkadot/api-derive/types';
import { OwnMembers } from '../types';
import React from 'react';
interface Props extends OwnMembers {
    className?: string;
    info?: DeriveSociety;
}
export default function Defender({ className, info, isMember, ownMembers }: Props): React.ReactElement<Props> | null;
export {};
