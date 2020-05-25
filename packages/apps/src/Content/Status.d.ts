import { KeyringOptions } from '@polkadot/ui-keyring/options/types';
import { QueueStatus, QueueTx, QueueAction$Add } from '@polkadot/react-components/Status/types';
import React from 'react';
interface Props {
    optionsAll?: KeyringOptions;
    queueAction: QueueAction$Add;
    stqueue: QueueStatus[];
    txqueue: QueueTx[];
}
export default function Status({ optionsAll, queueAction, stqueue, txqueue }: Props): React.ReactElement<Props>;
export {};
