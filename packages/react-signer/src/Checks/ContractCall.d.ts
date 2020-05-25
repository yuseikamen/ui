import { DerivedContractFees } from '@polkadot/api-derive/types';
import { ExtraFees as State } from './types';
import BN from 'bn.js';
import React from 'react';
import { Compact, UInt } from '@polkadot/types';
interface Props {
    endowment: BN | Compact<UInt>;
    fees: DerivedContractFees;
    onChange: (fees: State) => void;
}
export default function ContractCall({ endowment, fees, onChange }: Props): React.ReactElement<Props> | null;
export {};
