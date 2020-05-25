import { BareProps } from '@polkadot/react-components/types';
import { QueueTx } from '@polkadot/react-components/Status/types';
import React from 'react';
interface Props extends BareProps {
    queue: QueueTx[];
}
export default function Results({ queue }: Props): React.ReactElement<Props> | null;
export {};
