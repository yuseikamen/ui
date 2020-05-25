import { BareProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends BareProps {
    defaultValue?: any;
    isDisabled?: boolean;
    isError?: boolean;
    label?: React.ReactNode;
    onChange?: (contents: Uint8Array) => void;
    placeholder?: string | any;
    withLabel?: boolean;
}
export default function File({ className, isDisabled, isError, label, onChange, placeholder, style, withLabel }: Props): React.ReactElement<Props>;
export {};
