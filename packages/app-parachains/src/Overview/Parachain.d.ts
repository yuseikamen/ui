import { I18nProps } from '@polkadot/react-components/types';
import BN from 'bn.js';
import React from 'react';
interface Props extends I18nProps {
    className?: string;
    paraId: BN;
}
declare const _default: React.ComponentType<Pick<Pick<Pick<Props, "className" | "style" | "t" | "i18n" | "tReady" | "paraId"> & Partial<Pick<Props, never>>, "className" | "style" | "t" | "i18n" | "tReady" | "paraId"> & {
    theme?: any;
}, "className" | "style" | "theme" | "paraId"> & import("react-i18next").WithTranslationProps>;
export default _default;
