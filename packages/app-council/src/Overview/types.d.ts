import { SetIndex } from '@polkadot/types/interfaces';
import { DerivedElectionsInfo } from '@polkadot/api-derive/types';
import BN from 'bn.js';
export interface ComponentProps {
    electionsInfo: DerivedElectionsInfo;
}
export interface VoterPosition {
    setIndex: SetIndex;
    globalIndex: BN;
}
