import React from 'react';
interface Props {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}
declare function SideBarToggle({ isMenuOpen, toggleMenu }: Props): React.ReactElement<Props>;
export default SideBarToggle;
