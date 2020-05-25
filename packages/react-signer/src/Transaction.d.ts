import { QueueTx } from '@polkadot/react-components/Status/types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    hideDetails?: boolean;
    isSendable: boolean;
    onError: () => void;
    tip?: BN;
    value: QueueTx;
}
export default function Transaction({ children, hideDetails, isSendable, onError, value: { accountId, extrinsic, isUnsigned }, tip }: Props): React.ReactElement<Props> | null;
export {};
