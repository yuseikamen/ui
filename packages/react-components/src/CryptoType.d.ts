import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    accountId: AccountId | AccountIndex | Address | string | Uint8Array | null;
    label?: string;
}
export default function CryptoType({ accountId, className, label }: Props): React.ReactElement<Props>;
export {};
