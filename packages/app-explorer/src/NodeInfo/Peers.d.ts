import { PeerInfo } from '@polkadot/types/interfaces';
import { I18nProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends I18nProps {
    peers?: PeerInfo[] | null;
}
declare const _default: React.ComponentType<Pick<Pick<Pick<Props, "className" | "style" | "t" | "peers" | "i18n" | "tReady"> & Partial<Pick<Props, never>>, "className" | "style" | "t" | "peers" | "i18n" | "tReady"> & {
    theme?: any;
}, "className" | "style" | "theme" | "peers"> & import("react-i18next").WithTranslationProps>;
export default _default;
