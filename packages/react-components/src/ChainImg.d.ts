import React from 'react';
declare const LOGOS: Record<string, any>;
interface Props {
    className?: string;
    logo?: keyof typeof LOGOS;
    onClick?: () => any;
}
declare function ChainImg({ className, logo, onClick }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof ChainImg, any, {}, never>;
export default _default;
