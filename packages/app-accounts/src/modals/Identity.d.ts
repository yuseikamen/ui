import React from 'react';
interface Props {
    address: string;
    className?: string;
    onClose: () => void;
}
declare function Identity({ address, className, onClose }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof Identity, any, {}, never>;
export default _default;
