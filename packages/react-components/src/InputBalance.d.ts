import { BareProps } from './types';
import BN from 'bn.js';
import React from 'react';
interface Props extends BareProps {
    autoFocus?: boolean;
    defaultValue?: BN | string;
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    isFull?: boolean;
    isZeroable?: boolean;
    label?: React.ReactNode;
    labelExtra?: React.ReactNode;
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
declare function InputBalance({ autoFocus, className, defaultValue: inDefault, help, isDisabled, isError, isFull, isZeroable, label, labelExtra, maxValue, onChange, onEnter, onEscape, placeholder, style, value, withEllipsis, withLabel, withMax }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof InputBalance, any, {}, never>;
export default _default;
