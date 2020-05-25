import { DigestItem } from '@polkadot/types/interfaces';
import { I18nProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends I18nProps {
    value?: DigestItem[];
}
declare const _default: React.ComponentType<Pick<Props, "value" | "className" | "style"> & import("react-i18next").WithTranslationProps>;
export default _default;
