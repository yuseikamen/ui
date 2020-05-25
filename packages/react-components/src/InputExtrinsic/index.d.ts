import { SubmittableExtrinsicFunction } from '@polkadot/api/types';
import React from 'react';
interface Props {
    className?: string;
    defaultValue: SubmittableExtrinsicFunction<'promise'>;
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    isPrivate?: boolean;
    label: React.ReactNode;
    onChange: (value: SubmittableExtrinsicFunction<'promise'>) => void;
    style?: any;
    withLabel?: boolean;
}
export default function InputExtrinsic({ className, defaultValue, help, label, onChange, style, withLabel }: Props): React.ReactElement<Props>;
export {};
