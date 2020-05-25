import { SubmittableExtrinsicFunction } from '@polkadot/api/types';
import { BareProps } from '../types';
import { DropdownOptions } from '../util/types';
import React from 'react';
interface Props extends BareProps {
    defaultValue?: string;
    isError?: boolean;
    onChange: (value: string) => void;
    options: DropdownOptions;
    value: SubmittableExtrinsicFunction<'promise'>;
}
export default function SelectSection({ className, defaultValue, isError, onChange, options, style, value }: Props): React.ReactElement<Props>;
export {};
