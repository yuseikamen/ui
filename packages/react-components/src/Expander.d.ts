import { BareProps } from './types';
import React from 'react';
export interface Props extends BareProps {
    children: React.ReactNode;
    summary: React.ReactNode;
}
export default function Expanded({ children, className, summary }: Props): React.ReactElement<Props>;
