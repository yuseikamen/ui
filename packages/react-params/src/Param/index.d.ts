import { BaseProps, ComponentMap } from '../types';
import React from 'react';
interface Props extends BaseProps {
    isDisabled?: boolean;
    isOptional?: boolean;
    overrides?: ComponentMap;
}
export default function Param({ className, defaultValue, isDisabled, isOptional, name, onChange, onEnter, onEscape, overrides, style, type }: Props): React.ReactElement<Props> | null;
export {};
