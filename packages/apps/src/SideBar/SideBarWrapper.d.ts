import React from 'react';
interface Props {
    children: any;
    className?: string;
    handleResize: () => void;
    isCollapsed: boolean;
}
declare function SideBarWrapper({ children, className, handleResize, isCollapsed }: Props): React.ReactElement<Props>;
export default SideBarWrapper;
