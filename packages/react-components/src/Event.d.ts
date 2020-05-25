import { Event } from '@polkadot/types/interfaces';
import { BareProps } from './types';
import React from 'react';
export interface Props extends BareProps {
    children?: React.ReactNode;
    value: Event;
}
export default function EventDisplay({ children, className, style, value }: Props): React.ReactElement<Props>;
