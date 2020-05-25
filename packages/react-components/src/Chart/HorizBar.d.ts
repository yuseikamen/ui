import { BareProps } from '../types';
import BN from 'bn.js';
import React from 'react';
interface Value {
    colors: string[];
    label: string;
    tooltip?: string;
    value: number | BN;
}
interface Props extends BareProps {
    aspectRatio?: number;
    max?: number;
    showLabels?: boolean;
    values: Value[];
    withColors?: boolean;
}
export default function ChartHorizBar({ aspectRatio, className, max, showLabels, style, values }: Props): React.ReactElement<Props> | null;
export {};
