import { Proposal, Hash } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    hash: Hash;
    isImminent?: boolean;
    proposal?: Proposal;
    withoutOr?: boolean;
}
export default function PreImageButton({ hash, isImminent, proposal, withoutOr }: Props): React.ReactElement<Props> | null;
export {};
