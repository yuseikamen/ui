import { ContractABIFnArg } from '@polkadot/api-contract/types';
import React from 'react';
interface Props {
    isDisabled?: boolean;
    params?: ContractABIFnArg[];
    onChange: (values: any[]) => void;
    onEnter?: () => void;
}
export default function Params({ isDisabled, onChange, onEnter, params: propParams }: Props): React.ReactElement<Props> | null;
export {};
