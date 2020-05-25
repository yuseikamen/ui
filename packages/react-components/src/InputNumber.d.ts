import { BareProps, BitLength } from './types';
import BN from 'bn.js';
import React from 'react';
interface Props extends BareProps {
    autoFocus?: boolean;
    bitLength?: BitLength;
    defaultValue?: BN | string;
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    isFull?: boolean;
    isSi?: boolean;
    isDecimal?: boolean;
    isZeroable?: boolean;
    label?: React.ReactNode;
    labelExtra?: React.ReactNode;
    maxLength?: number;
    maxValue?: BN;
    onChange?: (value?: BN) => void;
    onEnter?: () => void;
    onEscape?: () => void;
    placeholder?: string;
    value?: BN | string;
    withEllipsis?: boolean;
    withLabel?: boolean;
    withMax?: boolean;
}
export declare class TokenUnit {
    static abbr: string;
    static setAbbr(abbr?: string): void;
}
export declare function formatInput(value: string): string;
export default function InputNumber(props: Props): React.ReactElement<Props>;
export {};
