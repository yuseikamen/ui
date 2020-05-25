import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import { BareProps } from './types';
import BN from 'bn.js';
import React from 'react';
export interface RenderProps extends BareProps {
    className?: string;
    label?: React.ReactNode;
    value?: BN | BN[];
}
export interface Props extends BareProps {
    balance?: BN | BN[];
    label?: React.ReactNode;
    params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
    withLabel?: boolean;
}
export declare function renderProvided({ className, label, value }: RenderProps): React.ReactNode;
export default function BalanceDisplay(props: Props): React.ReactElement<Props> | null;
