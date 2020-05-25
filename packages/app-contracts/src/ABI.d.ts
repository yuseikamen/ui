import { I18nProps } from '@polkadot/react-components/types';
import React from 'react';
import { Abi } from '@polkadot/api-contract';
interface Props extends I18nProps {
    className?: string;
    contractAbi?: Abi | null;
    errorText?: string | null;
    help?: React.ReactNode;
    isError?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    label?: React.ReactNode;
    onChange: (json: string | null, contractAbi: Abi | null) => void;
    onRemove?: () => void;
    onRemoved?: () => void;
    onSelect?: () => void;
    onSelectConstructor?: (constructorIndex?: number) => void;
}
interface State {
    contractAbi: Abi | null;
    errorText: string | null;
    isAbiValid: boolean;
    isEmpty: boolean;
    isError: boolean;
}
declare const _default: React.ComponentType<Pick<Pick<Pick<Props & React.RefAttributes<React.Component<Props, State, any>>, "help" | "isDisabled" | "isError" | "label" | "onChange" | "className" | "style" | "ref" | "key" | "onSelect" | "t" | "i18n" | "tReady" | "onRemove" | "contractAbi" | "onSelectConstructor" | "errorText" | "isRequired" | "onRemoved"> & Partial<Pick<Props & React.RefAttributes<React.Component<Props, State, any>>, never>>, "help" | "isDisabled" | "isError" | "label" | "onChange" | "className" | "style" | "ref" | "key" | "onSelect" | "t" | "i18n" | "tReady" | "onRemove" | "contractAbi" | "onSelectConstructor" | "errorText" | "isRequired" | "onRemoved"> & {
    theme?: any;
} & {
    children?: React.ReactNode;
}, "help" | "isDisabled" | "isError" | "label" | "onChange" | "className" | "style" | "children" | "ref" | "key" | "theme" | "onSelect" | "onRemove" | "contractAbi" | "onSelectConstructor" | "errorText" | "isRequired" | "onRemoved"> & import("react-i18next").WithTranslationProps>;
export default _default;
