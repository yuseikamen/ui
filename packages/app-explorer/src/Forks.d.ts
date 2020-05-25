import { ApiProps } from '@polkadot/react-api/types';
import { I18nProps } from '@polkadot/react-components/types';
import { Header } from '@polkadot/types/interfaces';
import React from 'react';
interface Props extends ApiProps, I18nProps {
    className?: string;
    finHead?: Header;
    newHead?: Header;
}
declare const _default: React.ComponentType<Pick<Pick<Pick<Props, "className" | "style" | "api" | "isWaitingInjected" | "isApiConnected" | "apiDefaultTx" | "apiDefaultTxSudo" | "isApiReady" | "isDevelopment" | "isSubstrateV2" | "systemChain" | "systemName" | "systemVersion" | "t" | "i18n" | "tReady" | "finHead" | "newHead"> & Partial<Pick<Props, never>>, "className" | "style" | "api" | "isWaitingInjected" | "isApiConnected" | "apiDefaultTx" | "apiDefaultTxSudo" | "isApiReady" | "isDevelopment" | "isSubstrateV2" | "systemChain" | "systemName" | "systemVersion" | "t" | "i18n" | "tReady" | "finHead" | "newHead"> & {
    theme?: any;
}, "className" | "style" | "api" | "isWaitingInjected" | "isApiConnected" | "apiDefaultTx" | "apiDefaultTxSudo" | "isApiReady" | "isDevelopment" | "isSubstrateV2" | "systemChain" | "systemName" | "systemVersion" | "theme" | "finHead" | "newHead"> & import("react-i18next").WithTranslationProps>;
export default _default;
