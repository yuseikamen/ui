import { I18nProps } from '@polkadot/react-components/types';
import { ComponentProps } from '../types';
import React from 'react';
interface Props extends ComponentProps, I18nProps {
}
declare const _default: React.ComponentType<Pick<Props, "className" | "style" | "accounts" | "contracts" | "basePath" | "onStatusChange" | "hasCode" | "showDeploy" | "updated"> & import("react-i18next").WithTranslationProps>;
export default _default;
