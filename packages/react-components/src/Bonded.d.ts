import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import { BareProps } from './types';
import BN from 'bn.js';
import React from 'react';
export interface Props extends BareProps {
    bonded?: BN | BN[];
    label?: React.ReactNode;
    params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
    withLabel?: boolean;
}
export default function BondedDisplay(props: Props): React.ReactElement<Props> | null;
