import { DerivedStakingOverview } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    controllerId: string;
    next: string[];
    nominees?: string[];
    onClose: () => void;
    stakingOverview?: DerivedStakingOverview;
    stashId: string;
}
declare function Nominate({ className, controllerId, nominees, onClose, next, stakingOverview, stashId }: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof Nominate, any, {}, never>;
export default _default;
