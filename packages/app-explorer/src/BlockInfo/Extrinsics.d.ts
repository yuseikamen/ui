import { BlockNumber, Extrinsic } from '@polkadot/types/interfaces';
import { I18nProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends I18nProps {
    blockNumber?: BlockNumber;
    label?: React.ReactNode;
    value?: Extrinsic[] | null;
}
declare const _default: React.ComponentType<Pick<Pick<Pick<Props, "label" | "value" | "className" | "style" | "t" | "i18n" | "tReady" | "blockNumber"> & Partial<Pick<Props, never>>, "label" | "value" | "className" | "style" | "t" | "i18n" | "tReady" | "blockNumber"> & {
    theme?: any;
}, "label" | "value" | "className" | "style" | "theme" | "blockNumber"> & import("react-i18next").WithTranslationProps>;
export default _default;
