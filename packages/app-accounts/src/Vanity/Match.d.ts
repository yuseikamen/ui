import { BareProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends BareProps {
    address: string;
    count: number;
    offset: number;
    onCreateToggle: (seed: string) => void;
    onRemove: (address: string) => void;
    seed: Uint8Array;
}
declare function Match({ address, className, count, offset, onCreateToggle, onRemove, seed }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof Match, any, {}, never>;
export default _default;
