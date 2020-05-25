import { ContractCallOutcome } from '@polkadot/api-contract/types';
import React from 'react';
interface Props {
    className?: string;
    onClear?: () => void;
    outcome: ContractCallOutcome;
}
declare function Outcome(props: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof Outcome, any, {}, never>;
export default _default;
