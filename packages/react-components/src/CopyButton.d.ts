import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    children?: React.ReactNode;
    className?: string;
    icon?: string;
    isAddress?: boolean;
    value?: any;
}
declare function CopyButton({ children, className, icon, isAddress, value }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof CopyButton, any, {}, never>;
export default _default;
