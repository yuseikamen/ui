import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    autoFocus?: boolean;
    children?: React.ReactNode;
    defaultValue?: any;
    help?: string;
    isDisabled?: boolean;
    isError?: boolean;
    isFull?: boolean;
    label?: string;
    labelExtra?: React.ReactNode;
    name?: string;
    onChange: (value: string) => void;
    onEnter?: () => void;
    onEscape?: () => void;
    tabIndex?: number;
    value: any;
    withLabel?: boolean;
}
export default function Password({ autoFocus, children, className, defaultValue, help, isDisabled, isError, isFull, label, labelExtra, name, onChange, onEnter, onEscape, style, tabIndex, value, withLabel }: Props): React.ReactElement<Props>;
export {};
