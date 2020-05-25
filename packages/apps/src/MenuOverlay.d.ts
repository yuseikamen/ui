import React from 'react';
interface Props {
    isMenuOpen: boolean;
    _handleResize: () => void;
}
declare function MenuOverlay({ _handleResize, isMenuOpen }: Props): React.ReactElement<Props>;
export default MenuOverlay;
