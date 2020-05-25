import { BareProps } from './types';
import { SemanticCOLORS, SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import React from 'react';
interface Props extends BareProps {
    children: React.ReactNode;
    color?: SemanticCOLORS;
    icon?: SemanticICONS;
    label?: React.ReactNode;
}
declare function Bubble({ color, children, className, icon, label }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof Bubble, any, {}, never>;
export default _default;
