import { BareProps } from './types';
import React from 'react';
interface Props<Option> extends BareProps {
    allowAdd?: boolean;
    defaultValue?: any;
    dropdownClassName?: string;
    help?: React.ReactNode;
    isButton?: boolean;
    isDisabled?: boolean;
    isError?: boolean;
    isFull?: boolean;
    isMultiple?: boolean;
    label?: React.ReactNode;
    labelExtra?: React.ReactNode;
    onAdd?: (value: any) => void;
    onBlur?: () => void;
    onChange?: (value: any) => void;
    onClose?: () => void;
    onSearch?: (filteredOptions: any[], query: string) => Option[];
    options: Option[];
    placeholder?: string;
    renderLabel?: (item: any) => any;
    searchInput?: {
        autoFocus: boolean;
    };
    transform?: (value: any) => any;
    value?: any;
    withEllipsis?: boolean;
    withLabel?: boolean;
}
declare function Dropdown<Option>({ allowAdd, className, defaultValue, dropdownClassName, help, isButton, isDisabled, isError, isFull, isMultiple, label, labelExtra, onAdd, onBlur, onChange, onClose, onSearch, options, placeholder, renderLabel, searchInput, style, transform, withEllipsis, withLabel, value }: Props<Option>): React.ReactElement<Props<Option>>;
declare const _default: import("styled-components").StyledComponent<typeof Dropdown, any, {}, never>;
export default _default;
