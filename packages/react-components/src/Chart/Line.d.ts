import { BareProps } from '../types';
import BN from 'bn.js';
import React from 'react';
interface Props extends BareProps {
    colors?: (string | undefined)[];
    labels: string[];
    legends: string[];
    values: (number | BN)[][];
}
export default function LineChart({ className, colors, labels, legends, style, values }: Props): React.ReactElement<Props> | null;
export {};
