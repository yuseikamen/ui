import { RpcMethod } from '@polkadot/jsonrpc/types';
import { DropdownOptions } from '../util/types';
import { BareProps } from '../types';
import React from 'react';
interface Props extends BareProps {
    isError?: boolean;
    onChange: (value: RpcMethod) => void;
    options: DropdownOptions;
    value: RpcMethod;
}
export default function SelectMethod(props: Props): React.ReactElement<Props> | null;
export {};
