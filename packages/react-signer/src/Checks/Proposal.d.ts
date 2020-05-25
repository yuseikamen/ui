import { DerivedFees } from '@polkadot/api-derive/types';
import { ExtraFees } from './types';
import BN from 'bn.js';
import React from 'react';
import { Compact, UInt } from '@polkadot/types';
interface Props {
    deposit: BN | Compact<UInt>;
    fees: DerivedFees;
    democracy_minimumDeposit?: BN;
    onChange: (fees: ExtraFees) => void;
}
export default function Proposal({ deposit, onChange }: Props): React.ReactElement<Props>;
export {};
