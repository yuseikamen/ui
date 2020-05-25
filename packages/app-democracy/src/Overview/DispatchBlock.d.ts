import { Hash, ReferendumIndex } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import React from 'react';
import { Option, StorageKey, Vec } from '@polkadot/types';
interface Props {
    entries: Option<Vec<Option<ITuple<[Hash, ReferendumIndex]>>>>;
    keyPrefix: string;
    storageKey: StorageKey;
}
export default function DispatchBlock({ entries, keyPrefix, storageKey }: Props): React.ReactElement<Props> | null;
export {};
