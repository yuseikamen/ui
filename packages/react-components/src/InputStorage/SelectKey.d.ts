import { DropdownOptions } from '../util/types';
import { BareProps } from '../types';
import { StorageEntryPromise } from './types';
import React from 'react';
interface Props extends BareProps {
    isError?: boolean;
    onChange: (value: StorageEntryPromise) => void;
    options: DropdownOptions;
    value: StorageEntryPromise;
}
export default function SelectKey(props: Props): React.ReactElement<Props> | null;
export {};
