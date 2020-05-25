import { BareProps } from '@polkadot/react-api/types';
import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import React from 'react';
interface Props extends BareProps {
    children?: React.ReactNode;
    params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
    label?: React.ReactNode;
}
export default function BondedDisplay({ children, className, label, params }: Props): React.ReactElement<Props>;
export {};
