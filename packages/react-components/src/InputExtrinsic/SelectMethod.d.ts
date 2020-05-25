import { SubmittableExtrinsicFunction } from '@polkadot/api/types';
import { BareProps } from '../types';
import { DropdownOptions } from '../util/types';
import React from 'react';
import ApiPromise from '@polkadot/api/promise';
interface Props extends BareProps {
    api: ApiPromise;
    isError?: boolean;
    onChange: (value: SubmittableExtrinsicFunction<'promise'>) => void;
    options: DropdownOptions;
    value: SubmittableExtrinsicFunction<'promise'>;
}
export default function SelectMethod({ api, className, isError, onChange, options, style, value }: Props): React.ReactElement<Props> | null;
export {};
