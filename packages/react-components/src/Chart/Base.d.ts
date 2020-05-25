import { BareProps } from '../types';
import React from 'react';
interface Props extends BareProps {
    children: React.ReactNode;
}
export default function BaseChart({ children, className, style }: Props): React.ReactElement<Props>;
export {};
