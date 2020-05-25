import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    children: React.ReactNode;
}
declare function FilterOverlay({ children, className }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof FilterOverlay, any, {}, never>;
export default _default;
