import { DerivedHeartbeats, DerivedStakingOverview } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    authorsMap: Record<string, string>;
    hasQueries: boolean;
    isIntentions: boolean;
    isVisible: boolean;
    lastAuthors?: string[];
    next: string[];
    recentlyOnline?: DerivedHeartbeats;
    setNominators: (nominators: string[]) => void;
    stakingOverview?: DerivedStakingOverview;
}
export default function CurrentList({ authorsMap, hasQueries, isIntentions, isVisible, lastAuthors, next, recentlyOnline, setNominators, stakingOverview }: Props): React.ReactElement<Props> | null;
export {};
