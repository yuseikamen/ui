import { StorageEntryPromise } from './types';
import React from 'react';
interface Props {
    className?: string;
    defaultValue: StorageEntryPromise;
    help?: React.ReactNode;
    isError?: boolean;
    label: React.ReactNode;
    onChange?: (value: StorageEntryPromise) => void;
    style?: any;
    withLabel?: boolean;
}
export default function InputStorage({ className, defaultValue, help, label, onChange, style, withLabel }: Props): React.ReactElement<Props>;
export {};
