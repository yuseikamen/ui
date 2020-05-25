import { DerivedStakingOverview } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    isVisible: boolean;
    next: string[];
    nominators: string[];
    stakingOverview?: DerivedStakingOverview;
    style?: any;
}
declare function Summary({ className, isVisible, next, nominators, stakingOverview, style }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof Summary, any, {}, never>;
export default _default;
