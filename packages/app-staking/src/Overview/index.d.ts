import { DerivedHeartbeats, DerivedStakingOverview } from '@polkadot/api-derive/types';
import { BareProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends BareProps {
    hasQueries: boolean;
    isVisible: boolean;
    recentlyOnline?: DerivedHeartbeats;
    next: string[];
    setNominators: (nominators: string[]) => void;
    stakingOverview?: DerivedStakingOverview;
}
export default function Overview({ hasQueries, isVisible, className, recentlyOnline, next, setNominators, stakingOverview }: Props): React.ReactElement<Props>;
export {};
