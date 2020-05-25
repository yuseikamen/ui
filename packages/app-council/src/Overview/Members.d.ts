import { AccountId } from '@polkadot/types/interfaces';
import { ComponentProps } from './types';
import React from 'react';
interface Props extends ComponentProps {
    allVotes?: Record<string, AccountId[]>;
    className?: string;
}
export default function Members({ allVotes, className, electionsInfo: { members } }: Props): React.ReactElement<Props>;
export {};
