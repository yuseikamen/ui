import { I18nProps } from './types';
import React from 'react';
interface Props extends I18nProps {
    children: React.ReactNode;
    doThrow?: boolean;
    onError?: () => void;
}
declare const _default: React.ComponentType<Pick<Props, "className" | "style" | "children" | "onError" | "doThrow"> & import("react-i18next").WithTranslationProps>;
export default _default;
