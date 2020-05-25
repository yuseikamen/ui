import { BlockNumber, Hash, ReferendumIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    blockNumber?: BlockNumber;
    hash: Hash;
    referendumIndex: ReferendumIndex;
}
export default function DispatchEntry({ blockNumber, hash, referendumIndex }: Props): React.ReactElement<Props>;
export {};
