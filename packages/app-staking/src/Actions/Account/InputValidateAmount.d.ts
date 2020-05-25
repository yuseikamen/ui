import { I18nProps } from '@polkadot/react-components/types';
import BN from 'bn.js';
import React from 'react';
interface Props extends I18nProps {
    accountId: string | null;
    onError: (error: string | null) => void;
    value?: BN | null;
}
declare const _default: React.ComponentType<Pick<Props, "value" | "className" | "style" | "accountId" | "onError"> & import("react-i18next").WithTranslationProps>;
export default _default;
