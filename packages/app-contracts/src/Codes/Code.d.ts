import { I18nProps } from '@polkadot/react-components/types';
import { CodeStored } from '../types';
import React from 'react';
import { RouteComponentProps } from 'react-router';
interface Props extends I18nProps, RouteComponentProps<{}> {
    code: CodeStored;
    showDeploy: (codeHash?: string, constructorIndex?: number) => () => void;
}
declare const _default: React.ComponentType<Pick<Pick<Props, "className" | "style" | "code" | "t" | "i18n" | "tReady" | "showDeploy">, "className" | "style" | "code" | "showDeploy"> & import("react-i18next").WithTranslationProps>;
export default _default;
