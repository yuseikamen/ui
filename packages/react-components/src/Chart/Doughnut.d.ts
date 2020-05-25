import { BareProps } from '../types';
import BN from 'bn.js';
import React from 'react';
interface Value {
    colors: string[];
    label: string;
    value: number | BN;
}
interface Props extends BareProps {
    size?: number;
    values: Value[];
}
export default function ChartDoughnut({ className, size, style, values }: Props): React.ReactElement<Props>;
export {};
