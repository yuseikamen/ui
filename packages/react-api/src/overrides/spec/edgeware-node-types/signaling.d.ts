import { u32, Text, u64, Bytes } from '@polkadot/types';
import { Struct } from '@polkadot/types/codec';
import { AccountId } from '@polkadot/types/interfaces';
import { Registry } from '@polkadot/types/types';
import { VoteStage } from './voting';
export declare class ProposalRecord extends Struct {
    constructor(registry: Registry, value: any);
    get index(): u32;
    get author(): AccountId;
    get stage(): VoteStage;
    get transition_time(): u32;
    get title(): Text;
    get contents(): Text;
    get vote_id(): u64;
}
export declare const SignalingTypes: {
    PreVoting: typeof import("./voting").PreVoting;
    Voting: typeof import("./voting").Voting;
    Completed: typeof import("./voting").Completed;
    Commit: typeof import("./voting").Commit;
    VoteStage: typeof VoteStage;
    ProposalRecord: typeof ProposalRecord;
    ProposalContents: typeof Bytes;
    ProposalTitle: typeof Bytes;
};
