import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import { BareProps } from './types';
import React from 'react';
export interface Props extends BareProps {
    label?: React.ReactNode;
    params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
    withLabel?: boolean;
}
export default function LockedVoteDisplay(props: Props): React.ReactElement<Props> | null;
