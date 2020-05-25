import { BareProps } from '@polkadot/react-api/types';
import BN from 'bn.js';
import React from 'react';
interface Props extends BareProps {
    value?: BN | Date | number;
}
export default function Elapsed({ className, style, value }: Props): React.ReactElement<Props>;
export {};
