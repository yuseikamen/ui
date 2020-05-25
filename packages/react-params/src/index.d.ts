import { I18nProps } from '@polkadot/react-components/types';
import { ComponentMap, ParamDef, RawParams } from './types';
import React from 'react';
interface Props extends I18nProps {
    isDisabled?: boolean;
    onChange?: (value: RawParams) => void;
    onEnter?: () => void;
    onError?: () => void;
    onEscape?: () => void;
    overrides?: ComponentMap;
    params: ParamDef[];
    values?: RawParams | null;
}
declare const _default: React.ComponentType<Pick<Pick<Pick<Props & React.RefAttributes<React.Component<Props, any, any>>, "isDisabled" | "onChange" | "className" | "style" | "ref" | "params" | "key" | "values" | "onError" | "onEnter" | "onEscape" | "t" | "overrides" | "i18n" | "tReady"> & Partial<Pick<Props & React.RefAttributes<React.Component<Props, any, any>>, never>>, "isDisabled" | "onChange" | "className" | "style" | "ref" | "params" | "key" | "values" | "onError" | "onEnter" | "onEscape" | "t" | "overrides" | "i18n" | "tReady"> & {
    theme?: any;
} & {
    children?: React.ReactNode;
}, "isDisabled" | "onChange" | "className" | "style" | "children" | "ref" | "params" | "key" | "theme" | "values" | "onError" | "onEnter" | "onEscape" | "overrides"> & import("react-i18next").WithTranslationProps>;
export default _default;
