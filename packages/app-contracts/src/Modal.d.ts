import { I18nProps } from '@polkadot/react-components/types';
import BN from 'bn.js';
import React from 'react';
import { Abi } from '@polkadot/api-contract';
import { TxComponent } from '@polkadot/react-components';
export interface ContractModalProps extends I18nProps {
    basePath: string;
    isNew?: boolean;
    isOpen: boolean;
    onClose?: () => void;
}
export interface ContractModalState {
    abi?: string | null;
    accountId?: string | null;
    contractAbi?: Abi | null;
    gasLimit: BN;
    isAbiSupplied: boolean;
    isAbiValid: boolean;
    isBusy: boolean;
    isNameValid: boolean;
    name?: string | null;
    tags: string[];
}
declare class ContractModal<P extends ContractModalProps, S extends ContractModalState> extends TxComponent<P, S> {
    protected defaultState: S;
    state: S;
    protected isContract?: boolean;
    render(): React.ReactNode;
    protected headerText: string;
    protected renderContent: () => React.ReactNode | null;
    protected renderButtons: () => React.ReactNode | null;
    protected renderInputAbi(): React.ReactNode;
    protected renderInputAccount(): React.ReactNode;
    protected renderInputName(): React.ReactNode;
    protected renderInputGas(): React.ReactNode;
    protected reset: () => void;
    protected toggleBusy: (isBusy?: boolean | undefined) => () => void;
    protected onClose: () => void;
    protected onAddAbi: (abi: string | null | undefined, contractAbi?: Abi | null, isAbiSupplied?: boolean) => void;
    protected onChangeAccount: (accountId: string | null) => void;
    protected onChangeName: (name: string) => void;
    protected onChangeGas: (gasLimit: BN | undefined) => void;
}
export default ContractModal;
