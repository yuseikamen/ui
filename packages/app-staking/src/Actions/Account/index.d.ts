import { DerivedStakingOverview, DerivedHeartbeats } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    allStashes?: string[];
    className?: string;
    isOwnStash: boolean;
    next: string[];
    onUpdateType: (stashId: string, type: 'validator' | 'nominator' | 'started' | 'other') => void;
    recentlyOnline?: DerivedHeartbeats;
    stakingOverview?: DerivedStakingOverview;
    stashId: string;
}
declare function Account({ allStashes, className, isOwnStash, next, onUpdateType, stakingOverview, stashId }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof Account, any, {}, never>;
export default _default;
