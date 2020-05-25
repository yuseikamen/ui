import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    help?: React.ReactNode;
    label?: React.ReactNode;
    withEllipsis?: boolean;
}
export default function Label({ className, help, label, withEllipsis }: Props): React.ReactElement<Props>;
export {};
