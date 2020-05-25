import BN from 'bn.js';
import React from 'react';
interface Props {
    lastReward: BN;
    numNominators: number;
    numValidators: number;
    totalStaked: BN;
}
export default function Summary({ lastReward, numNominators, numValidators, totalStaked }: Props): React.ReactElement<Props>;
export {};
