import React from 'react';
import { HeaderExtended } from '@polkadot/api-derive';
interface Props {
    headers: HeaderExtended[];
}
export default function BlockHeaders({ headers }: Props): React.ReactElement<Props>;
export {};
