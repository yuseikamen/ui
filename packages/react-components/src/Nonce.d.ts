import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import { BareProps } from './types';
import React from 'react';
export interface Props extends BareProps {
    label?: React.ReactNode;
    params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
}
export default function NonceDisplay({ className, label, params, style }: Props): React.ReactElement<Props> | null;
