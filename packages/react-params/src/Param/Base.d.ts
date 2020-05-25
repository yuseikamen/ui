import { BareProps } from '@polkadot/react-components/types';
import { Size } from '../types';
import React from 'react';
interface Props extends BareProps {
    children?: React.ReactNode;
    isDisabled?: boolean;
    isOuter?: boolean;
    label?: React.ReactNode;
    size?: Size;
    withLabel?: boolean;
}
export default function Base({ children, className, isOuter, label, size, style, withLabel }: Props): React.ReactElement<Props>;
export {};
