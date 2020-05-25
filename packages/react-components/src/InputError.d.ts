import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    label?: React.ReactNode;
}
export default function InputError({ className, label, style }: Props): React.ReactElement<Props>;
export {};
