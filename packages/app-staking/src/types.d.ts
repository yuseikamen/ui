import { DerivedFees, DerivedBalancesAll } from '@polkadot/api-derive/types';
import { AccountId, Balance, BlockNumber, Hash, SessionIndex } from '@polkadot/types/interfaces';
export declare type Nominators = Record<string, string[]>;
export interface CalculateBalanceProps {
    balances_fees?: DerivedFees;
    balances_all?: DerivedBalancesAll;
}
export declare type AccountFilter = 'all' | 'controller' | 'session' | 'stash' | 'unbonded';
export declare type ValidatorFilter = 'all' | 'hasNominators' | 'noNominators' | 'hasWarnings' | 'noWarnings' | 'iNominated' | 'nextSet';
export interface Slash {
    accountId: AccountId;
    amount: Balance;
}
export interface SessionRewards {
    blockHash: Hash;
    blockNumber: BlockNumber;
    isEventsEmpty: boolean;
    parentHash: Hash;
    reward: Balance;
    sessionIndex: SessionIndex;
    slashes: Slash[];
    treasury: Balance;
}
