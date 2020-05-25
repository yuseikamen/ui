import { BareProps } from '../types';
import React from 'react';
export interface Props extends BareProps {
    children: React.ReactNode;
}
export default function Queue({ children }: Props): React.ReactElement<Props>;
