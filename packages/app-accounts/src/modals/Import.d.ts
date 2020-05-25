import { I18nProps } from '@polkadot/react-components/types';
import { ModalProps } from '../types';
import React from 'react';
interface Props extends ModalProps, I18nProps {
}
declare const _default: React.ComponentType<Pick<Props, "className" | "style" | "onClose" | "onStatusChange"> & import("react-i18next").WithTranslationProps>;
export default _default;
