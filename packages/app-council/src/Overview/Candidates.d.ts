import { AccountId } from '@polkadot/types/interfaces';
import { ComponentProps } from './types';
import React from 'react';
interface Props extends ComponentProps {
    allVotes?: Record<string, AccountId[]>;
    className?: string;
}
export default function Candidates({ allVotes, className, electionsInfo: { candidates, runnersUp } }: Props): React.ReactElement<Props>;
export {};
