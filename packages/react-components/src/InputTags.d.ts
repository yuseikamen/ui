import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    allowAdd?: boolean;
    defaultValue?: string[];
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    label?: React.ReactNode;
    onBlur?: () => void;
    onChange?: (value: string[]) => void;
    onClose?: () => void;
    openOnFocus?: boolean;
    placeholder?: string;
    searchInput?: {
        autoFocus: boolean;
    };
    value?: string[];
    withLabel?: boolean;
}
export default function InputTags({ allowAdd, className, defaultValue, help, isDisabled, isError, label, onBlur, onChange, onClose, placeholder, searchInput, value, withLabel }: Props): React.ReactElement<Props>;
export {};
