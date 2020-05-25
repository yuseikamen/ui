import React from 'react';
interface Props {
    children: React.ReactNode;
    className?: string;
    help?: React.ReactNode;
    label: React.ReactNode;
    style?: any;
    withLabel?: boolean;
}
declare function LinkedWrapper({ children, className, help, label, style, withLabel }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof LinkedWrapper, any, {}, never>;
export default _default;
