import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    md: string;
}
declare function HelpOverlay({ className, md }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof HelpOverlay, any, {}, never>;
export default _default;
