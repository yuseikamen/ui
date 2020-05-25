import { Props as BaseProps, Size } from '../types';
import React from 'react';
interface Props extends BaseProps {
    asHex?: boolean;
    children?: React.ReactNode;
    length?: number;
    size?: Size;
    validate?: (u8a: Uint8Array) => boolean;
    withLength?: boolean;
}
export default function BaseBytes({ asHex, children, className, defaultValue: { value }, isDisabled, isError, label, length, onChange, onEnter, onEscape, size, style, validate, withLabel, withLength }: Props): React.ReactElement<Props>;
export {};
