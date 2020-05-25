import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    children?: React.ReactNode;
    help?: React.ReactNode;
    isError?: boolean;
    isHidden?: boolean;
    isMonospace?: boolean;
    label?: React.ReactNode;
    value?: any;
    withCopy?: boolean;
    withLabel?: boolean;
}
export default function Output({ className, children, help, isError, isHidden, isMonospace, label, style, value, withCopy, withLabel }: Props): React.ReactElement<Props>;
export {};
