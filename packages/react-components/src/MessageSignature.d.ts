import { ContractABIMessage } from '@polkadot/api-contract/types';
import React from 'react';
export interface Props {
    asConstructor?: boolean;
    message: ContractABIMessage;
    params?: any[];
    withTooltip?: boolean;
}
export default function MessageSignature({ message: { args, mutates, name, returnType }, params, asConstructor, withTooltip }: Props): React.ReactElement<Props>;
