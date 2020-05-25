import { I18nProps } from '@polkadot/react-components/types';
import { KeyringPair } from '@polkadot/keyring/types';
import React from 'react';
interface Props extends I18nProps {
    onClose: () => void;
    onUnlock: () => void;
    pair: KeyringPair | null;
}
declare const _default: React.ComponentType<Pick<Props, "className" | "style" | "onClose" | "pair" | "onUnlock"> & import("react-i18next").WithTranslationProps>;
export default _default;
