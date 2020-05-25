import { ConstValue, ConstValueBase } from './types';
import React from 'react';
interface Props {
    className?: string;
    defaultValue: ConstValueBase;
    help?: React.ReactNode;
    isError?: boolean;
    label: React.ReactNode;
    onChange?: (value: ConstValue) => void;
    style?: any;
    withLabel?: boolean;
}
export default function InputConsts({ className, defaultValue, help, label, onChange, style, withLabel }: Props): React.ReactElement<Props>;
export {};
