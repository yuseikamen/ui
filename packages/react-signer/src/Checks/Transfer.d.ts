import { DerivedFees } from '@polkadot/api-derive/types';
import { AccountId } from '@polkadot/types/interfaces';
import { ExtraFees } from './types';
import BN from 'bn.js';
import React from 'react';
import { Compact, UInt } from '@polkadot/types';
interface Props {
    amount: BN | Compact<UInt>;
    fees: DerivedFees;
    recipientId: string | AccountId;
    onChange: (fees: ExtraFees) => void;
}
export default function Transfer({ amount, fees, onChange, recipientId }: Props): React.ReactElement<Props>;
export {};
