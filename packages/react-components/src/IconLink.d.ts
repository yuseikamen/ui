import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    icon?: string;
    label?: React.ReactNode;
    onClick: () => void;
}
declare function IconLink({ className, icon, label, onClick }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof IconLink, any, {}, never>;
export default _default;
