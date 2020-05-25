import { I18nProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends I18nProps {
    controllerId: string;
    onError: (error: string | null) => void;
    sessionId: string | null;
    stashId: string;
}
declare const _default: React.ComponentType<Pick<Props, "className" | "style" | "onError" | "controllerId" | "stashId" | "sessionId"> & import("react-i18next").WithTranslationProps>;
export default _default;
