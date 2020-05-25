import { RpcMethod } from '@polkadot/jsonrpc/types';
import React from 'react';
interface Props {
    className?: string;
    defaultValue: RpcMethod;
    help?: React.ReactNode;
    isError?: boolean;
    label: React.ReactNode;
    onChange?: (value: RpcMethod) => void;
    style?: any;
    withLabel?: boolean;
}
export default function InputRpc({ className, defaultValue, help, label, onChange, style, withLabel }: Props): React.ReactElement<Props>;
export {};
