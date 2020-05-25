import { DropdownOptions } from '../util/types';
import { BareProps } from '../types';
import { StorageEntryPromise } from './types';
import React from 'react';
interface Props extends BareProps {
    defaultValue?: StorageEntryPromise;
    isError?: boolean;
    onChange: (value: string) => void;
    options: DropdownOptions;
    value: StorageEntryPromise;
}
export default function SelectSection({ className, defaultValue, isError, onChange, options, style, value: { creator: { section } } }: Props): React.ReactElement<Props>;
export {};
