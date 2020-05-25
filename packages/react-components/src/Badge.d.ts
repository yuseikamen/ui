import React from 'react';
interface Props {
    className?: string;
    hover?: React.ReactNode;
    info: React.ReactNode;
    isInline?: boolean;
    isSmall?: boolean;
    isTooltip?: boolean;
    onClick?: () => void;
    type: 'counter' | 'online' | 'offline' | 'next' | 'runnerup' | 'selected' | 'green' | 'blue' | 'brown' | 'gray';
}
declare function Badge({ className, hover, info, isInline, isSmall, isTooltip, onClick, type }: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof Badge, any, {}, never>;
export default _default;
