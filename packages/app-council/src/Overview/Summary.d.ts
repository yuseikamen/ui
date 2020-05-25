import { BlockNumber } from '@polkadot/types/interfaces';
import { ComponentProps } from './types';
import React from 'react';
interface Props extends ComponentProps {
    bestNumber?: BlockNumber;
    className?: string;
}
export default function Summary({ bestNumber, className, electionsInfo: { members, candidateCount, desiredSeats, runnersUp, termDuration, voteCount } }: Props): React.ReactElement<Props>;
export {};
