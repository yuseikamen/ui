import { I18nProps } from '@polkadot/react-components/types';
import { QueueTxRpcAdd } from '@polkadot/react-components/Status/types';
import React from 'react';
interface Props extends I18nProps {
    queueRpc: QueueTxRpcAdd;
}
declare const _default: React.ComponentType<Pick<Props, "className" | "style" | "queueRpc"> & import("react-i18next").WithTranslationProps>;
export default _default;
