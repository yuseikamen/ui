import { BareProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends BareProps {
    address: string;
    className?: string;
    isScanning: boolean;
    onSignature: (signature: {
        signature: string;
    }) => void;
    payload: Uint8Array;
}
declare function Qr({ address, className, isScanning, onSignature, payload }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof Qr, any, {}, never>;
export default _default;
