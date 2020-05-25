import { Hash } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    isImminent?: boolean;
    matchHash?: Hash;
    onClose: () => void;
}
declare function PreImage({ className, isImminent: propsIsImminent, matchHash, onClose }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof PreImage, any, {}, never>;
export default _default;
