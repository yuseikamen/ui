declare const _default: {
    'centrifuge-chain': {
        AnchorData: {
            id: string;
            docRoot: string;
            anchoredBlock: string;
        };
        Fee: {
            key: string;
            price: string;
        };
        PreCommitData: {
            signingRoot: string;
            identity: string;
            expirationBlock: string;
        };
        Proof: {
            leafHash: string;
            sortedHashes: string;
        };
        BalanceLock: string;
    };
    edgeware: {
        Address: string;
        Keys: string;
        PreVoting: typeof import("./edgeware-node-types/voting").PreVoting;
        Commit: typeof import("./edgeware-node-types/voting").Commit;
        Voting: typeof import("./edgeware-node-types/voting").Voting;
        Completed: typeof import("./edgeware-node-types/voting").Completed;
        VoteStage: typeof import("./edgeware-node-types/voting").VoteStage;
        Binary: typeof import("./edgeware-node-types/voting").Binary;
        MultiOption: typeof import("./edgeware-node-types/voting").MultiOption;
        VoteType: typeof import("./edgeware-node-types/voting").VoteType;
        OnePerson: typeof import("./edgeware-node-types/voting").OnePerson;
        OneCoin: typeof import("./edgeware-node-types/voting").OneCoin;
        TallyType: typeof import("./edgeware-node-types/voting").TallyType;
        VoteOutcome: typeof import("./edgeware-node-types/voting").VoteOutcome;
        Tally: typeof import("./edgeware-node-types/voting").Tally;
        VoteData: typeof import("./edgeware-node-types/voting").VoteData;
        VoteRecord: typeof import("./edgeware-node-types/voting").VoteRecord;
        'voting::VoteType': typeof import("./edgeware-node-types/voting").VoteType;
        'voting::TallyType': typeof import("./edgeware-node-types/voting").TallyType;
        Balance2: typeof import("./edgeware-node-types/treasuryReward").Balance2;
        ProposalRecord: typeof import("./edgeware-node-types/signaling").ProposalRecord;
        ProposalContents: typeof import("@polkadot/types").Bytes;
        ProposalTitle: typeof import("@polkadot/types").Bytes;
        IdentityStage: typeof import("./edgeware-node-types/identity").IdentityStage;
        IdentityRecord: typeof import("./edgeware-node-types/identity").IdentityRecord;
        MetadataRecord: typeof import("./edgeware-node-types/identity").MetadataRecord;
        IdentityType: typeof import("@polkadot/types").Text;
        Attestation: typeof import("@polkadot/types").Bytes;
        Identity: typeof import("@polkadot/types").Bytes;
        IdentityIndex: typeof import("@polkadot/types").u32;
        Claim: typeof import("@polkadot/types").Bytes;
    };
    kulupu: {
        Address: string;
        BalanceLock: string;
        Difficulty: string;
        DifficultyAndTimestamp: {
            difficulty: string;
            timestamp: string;
        };
        DispatchError: string;
        DispatchResult: string;
        DispatchInfo: {
            weight: string;
            class: string;
        };
    };
};
export default _default;
