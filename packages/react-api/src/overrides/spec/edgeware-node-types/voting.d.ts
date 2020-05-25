import { Null, bool, u64, Enum, Struct, Vec, Tuple, Option } from '@polkadot/types';
import U8aFixed from '@polkadot/types/codec/U8aFixed';
import { AccountId } from '@polkadot/types/interfaces';
import { AnyU8a, Registry } from '@polkadot/types/types';
export declare class PreVoting extends Null {
}
export declare class Commit extends Null {
}
export declare class Voting extends Null {
}
export declare class Completed extends Null {
}
export declare class VoteStage extends Enum {
    constructor(registry: Registry, value?: string, index?: number);
}
export declare class Binary extends Null {
}
export declare class MultiOption extends Null {
}
export declare class RankedChoice extends Null {
}
export declare class VoteType extends Enum {
    constructor(registry: Registry, value?: string, index?: number);
}
export declare class OnePerson extends Null {
}
export declare class OneCoin extends Null {
}
export declare class TallyType extends Enum {
    constructor(registry: Registry, value?: string, index?: number);
}
export declare class VoteOutcome extends U8aFixed {
    constructor(registry: Registry, value?: AnyU8a);
}
declare const Tally_base: import("@polkadot/types/types").Constructor<Option<import("@polkadot/types/types").Codec>>;
export declare class Tally extends Tally_base {
}
export declare class VoteData extends Struct {
    constructor(registry: Registry, value: any);
    get initiator(): AccountId;
    get stage(): VoteStage;
    get vote_type(): VoteType;
    get tally_type(): TallyType;
    get is_commit_reveal(): bool;
}
declare const Commitments_base: import("@polkadot/types/types").Constructor<Vec<Tuple>>;
export declare class Commitments extends Commitments_base {
}
declare const Reveals_base: import("@polkadot/types/types").Constructor<Vec<Tuple>>;
export declare class Reveals extends Reveals_base {
}
export declare class VoteRecord extends Struct {
    constructor(registry: Registry, value: any);
    get id(): u64;
    get commitments(): Commitments;
    get reveals(): Reveals;
    get data(): VoteData;
    get outcomes(): Vec<VoteOutcome>;
}
export declare const VotingTypes: {
    PreVoting: typeof PreVoting;
    Commit: typeof Commit;
    Voting: typeof Voting;
    Completed: typeof Completed;
    VoteStage: typeof VoteStage;
    Binary: typeof Binary;
    MultiOption: typeof MultiOption;
    VoteType: typeof VoteType;
    OnePerson: typeof OnePerson;
    OneCoin: typeof OneCoin;
    TallyType: typeof TallyType;
    VoteOutcome: typeof VoteOutcome;
    Tally: typeof Tally;
    VoteData: typeof VoteData;
    VoteRecord: typeof VoteRecord;
    'voting::VoteType': typeof VoteType;
    'voting::TallyType': typeof TallyType;
};
export {};
