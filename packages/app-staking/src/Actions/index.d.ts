import { DerivedHeartbeats, DerivedStakingOverview } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    allStashes: string[];
    className?: string;
    isVisible: boolean;
    recentlyOnline?: DerivedHeartbeats;
    next: string[];
    stakingOverview?: DerivedStakingOverview;
}
export default function Actions({ allStashes, className, isVisible, next, recentlyOnline, stakingOverview }: Props): React.ReactElement<Props>;
export {};
