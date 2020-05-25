import React from 'react';
interface Props {
    className?: string;
    collapse: () => void;
    handleResize: () => void;
    isCollapsed: boolean;
    isMenuOpen: boolean;
    toggleMenu: () => void;
    isAdvanceOpen: boolean;
}
declare function SideBarContainer({ className, collapse, handleResize, isCollapsed, isMenuOpen, toggleMenu, isAdvanceOpen }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof SideBarContainer, any, {}, never>;
export default _default;
