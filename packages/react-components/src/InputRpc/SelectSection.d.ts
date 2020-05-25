import { RpcMethod } from '@polkadot/jsonrpc/types';
import { DropdownOptions } from '../util/types';
import { BareProps } from '../types';
import React from 'react';
interface Props extends BareProps {
    defaultValue?: string;
    isError?: boolean;
    onChange: (value: string) => void;
    options: DropdownOptions;
    value: RpcMethod;
}
export default function SelectSection({ className, defaultValue, isError, onChange, options, style, value }: Props): React.ReactElement<Props>;
export {};
