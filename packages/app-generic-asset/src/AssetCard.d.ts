import React from 'react';
import { I18nProps } from '@polkadot/react-components/types';
interface Props extends I18nProps {
    assetId: string;
    name: string;
    onSaveName: (id: string, name: string) => void;
    onForget: (id: string) => void;
}
declare const _default: React.ComponentType<Pick<Props, "className" | "style" | "name" | "onForget" | "assetId" | "onSaveName"> & import("react-i18next").WithTranslationProps>;
export default _default;
