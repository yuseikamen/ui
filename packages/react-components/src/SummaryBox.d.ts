import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    children?: React.ReactNode;
    className?: string;
}
declare function SummaryBox({ children, className }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof SummaryBox, any, {}, never>;
export default _default;
