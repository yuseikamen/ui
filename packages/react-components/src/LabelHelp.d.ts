import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    help: React.ReactNode;
}
declare function LabelHelp({ className, help, style }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof LabelHelp, any, {}, never>;
export default _default;
