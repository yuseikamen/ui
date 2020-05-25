/// <reference types="react" />
import { TypeDef } from '@polkadot/types/types';
import { BareProps } from '@polkadot/react-components/types';
export declare type RawParamValue = any | undefined;
export declare type RawParamValueArray = (RawParamValue | RawParamValue[])[];
export declare type RawParamValues = RawParamValue | RawParamValueArray;
export interface RawParam {
    isValid: boolean;
    value: RawParamValues;
}
export interface RawParamOnChangeValue {
    isValid: boolean;
    value: RawParamValues;
}
export declare type RawParamOnChange = (value: RawParamOnChangeValue) => void;
export declare type RawParamOnEnter = () => void;
export declare type RawParamOnEscape = () => void;
export declare type RawParams = RawParam[];
export interface BaseProps extends BareProps {
    defaultValue: RawParam;
    name?: string;
    onChange?: RawParamOnChange;
    onEnter?: RawParamOnEnter;
    onEscape?: RawParamOnEscape;
    overrides?: ComponentMap;
    type: TypeDef;
}
export interface Props extends BaseProps {
    isDisabled?: boolean;
    isError?: boolean;
    isReadOnly?: boolean;
    label?: React.ReactNode;
    withLabel?: boolean;
}
export declare type Size = 'full' | 'large' | 'medium' | 'small';
export declare type ComponentMap = Record<string, React.ComponentType<Props>>;
export interface ParamDef {
    name?: string;
    type: TypeDef;
}
