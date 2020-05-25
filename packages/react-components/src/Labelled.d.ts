import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    help?: React.ReactNode;
    isHidden?: boolean;
    isFull?: boolean;
    isOuter?: boolean;
    isSmall?: boolean;
    label?: React.ReactNode;
    labelExtra?: React.ReactNode;
    children: React.ReactNode;
    withEllipsis?: boolean;
    withLabel?: boolean;
}
export default function Labelled({ className, children, help, isFull, isHidden, isOuter, isSmall, label, labelExtra, style, withEllipsis, withLabel }: Props): React.ReactElement<Props> | null;
export {};
