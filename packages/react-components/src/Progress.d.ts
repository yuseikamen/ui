import { BareProps } from './types';
import BN from 'bn.js';
import React from 'react';
import { UInt } from '@polkadot/types';
declare type BaseColors = 'blue' | 'green' | 'red' | 'orange';
export declare type Colors = 'auto' | 'autoReverse' | BaseColors;
interface Props extends BareProps {
    color?: Colors;
    percent?: BN | number;
    total?: UInt | BN | number;
    value?: UInt | BN | number;
}
export default function Progress({ className, color, percent, total, style, value }: Props): React.ReactElement<Props> | null;
export {};
