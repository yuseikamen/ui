import { BareProps } from '@polkadot/react-components/types';
import { Log } from './types';
import React from 'react';
interface Props extends BareProps {
    children?: React.ReactNode;
    logs: Log[];
}
declare function Output({ children, className, logs }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof Output, any, {}, never>;
export default _default;
