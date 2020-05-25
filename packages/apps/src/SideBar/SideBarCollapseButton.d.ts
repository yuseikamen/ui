import React from 'react';
interface Props {
    collapse: () => void;
    isCollapsed: boolean;
}
declare function SideBarCollapseButton({ collapse, isCollapsed }: Props): React.ReactElement<Props>;
export default SideBarCollapseButton;
