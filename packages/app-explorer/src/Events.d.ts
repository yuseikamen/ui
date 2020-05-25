import { I18nProps } from '@polkadot/react-components/types';
import { KeyedEvent } from './types';
import React from 'react';
interface Props extends I18nProps {
    emptyLabel?: React.ReactNode;
    events: KeyedEvent[];
    eventClassName?: string;
    withoutIndex?: boolean;
}
declare const _default: React.ComponentType<Pick<Props, "className" | "style" | "emptyLabel" | "eventClassName" | "events" | "withoutIndex"> & import("react-i18next").WithTranslationProps>;
export default _default;
