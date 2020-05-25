import { I18nProps } from '@polkadot/react-components/types';
import { Info } from './types';
import React from 'react';
interface Props extends I18nProps {
    nextRefresh: number;
    info: Info;
}
declare const _default: React.ComponentType<Pick<Props, "className" | "style" | "info" | "nextRefresh"> & import("react-i18next").WithTranslationProps>;
export default _default;
