import { QueueStatus, QueueTx } from './types';
import React from 'react';
import StatusContext from './Context';
export { StatusContext };
interface Props {
    className?: string;
    stqueue?: QueueStatus[];
    txqueue?: QueueTx[];
}
declare function Status({ className, stqueue, txqueue }: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof Status, any, {}, never>;
export default _default;
