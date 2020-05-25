import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    children?: React.ReactNode;
    defaultValue?: any;
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    isHidden?: boolean;
    label?: React.ReactNode;
    value?: React.ReactNode;
    withLabel?: boolean;
}
export default function Static({ className, children, defaultValue, help, isHidden, label, style, value, withLabel }: Props): React.ReactElement<Props>;
export {};
