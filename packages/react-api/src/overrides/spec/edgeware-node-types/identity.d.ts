import { Bytes, Text, u32, Null } from '@polkadot/types';
import { Option, Struct, Enum } from '@polkadot/types/codec';
import { AccountId } from '@polkadot/types/interfaces';
import { Registry } from '@polkadot/types/types';
export declare class MetadataRecord extends Struct {
    constructor(registry: Registry, value: any);
    get avatar(): Text;
    get display_name(): Text;
    get tagline(): Text;
}
export declare class Registered extends Null {
}
export declare class Attested extends Null {
}
export declare class Verified extends Null {
}
export declare class IdentityStage extends Enum {
    constructor(registry: Registry, value?: string, index?: number);
}
export declare class IdentityRecord extends Struct {
    constructor(registry: Registry, value: any);
    get account(): AccountId;
    get identity(): Bytes;
    get stage(): IdentityStage;
    get expiration_time(): u32;
    get proof(): Option<Text>;
    get metadata(): Option<MetadataRecord>;
}
export declare const IdentityTypes: {
    IdentityStage: typeof IdentityStage;
    IdentityRecord: typeof IdentityRecord;
    MetadataRecord: typeof MetadataRecord;
    IdentityType: typeof Text;
    Attestation: typeof Bytes;
    Identity: typeof Bytes;
    IdentityIndex: typeof u32;
    Claim: typeof Bytes;
};
