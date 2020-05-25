import { I18nProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends I18nProps {
    address: string;
    onClose: () => void;
}
declare const _default: React.ComponentType<Pick<Props, "address" | "className" | "style" | "onClose"> & import("react-i18next").WithTranslationProps>;
export default _default;
