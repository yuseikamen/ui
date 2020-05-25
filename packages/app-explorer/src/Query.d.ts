import { I18nProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends I18nProps {
    value?: string;
}
declare const _default: React.ComponentType<Pick<Pick<Pick<Props, "value" | "className" | "style" | "t" | "i18n" | "tReady"> & Partial<Pick<Props, never>>, "value" | "className" | "style" | "t" | "i18n" | "tReady"> & {
    theme?: any;
}, "value" | "className" | "style" | "theme"> & import("react-i18next").WithTranslationProps>;
export default _default;
