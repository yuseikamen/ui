import { I18nProps } from '@polkadot/react-components/types';
import { KeyedEvent } from './types';
import React from 'react';
import { HeaderExtended } from '@polkadot/api-derive';
interface Props extends I18nProps {
    events: KeyedEvent[];
    headers: HeaderExtended[];
}
declare const _default: React.ComponentType<Pick<Props, "className" | "style" | "headers" | "events"> & import("react-i18next").WithTranslationProps>;
export default _default;
