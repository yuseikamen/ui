import { ConstructTxFn, StringOrNull } from '@polkadot/react-components/types';
import { AccountId, Balance, BlockNumber, Call, Hash, SessionIndex } from '@polkadot/types/interfaces';
import { IExtrinsic } from '@polkadot/types/types';
import { SubmittableExtrinsic } from '@polkadot/api/promise/types';
export declare type CallParam = any;
export declare type CallParams = [] | [CallParam] | [CallParam, CallParam] | [CallParam, CallParam, CallParam];
export interface CallOptions<T> {
    defaultValue?: T;
    isSingle?: boolean;
    paramMap?: (params: any) => CallParams;
    transform?: (value: any) => T;
}
export declare type TxDef = [string, any[] | ConstructTxFn];
export declare type TxDefs = SubmittableExtrinsic | IExtrinsic | Call | TxDef | null;
export declare type TxSource<T extends TxDefs> = [T, boolean];
export interface ModalState {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}
export interface Slash {
    accountId: AccountId;
    amount: Balance;
}
export interface SessionRewards {
    blockHash: Hash;
    blockNumber: BlockNumber;
    isEventsEmpty: boolean;
    reward: Balance;
    sessionIndex: SessionIndex;
    slashes: Slash[];
}
export interface ExtrinsicAndSenders {
    extrinsic: SubmittableExtrinsic | null;
    isSubmittable: boolean;
    sendTx: () => void;
    sendUnsigned: () => void;
}
export interface TxProps {
    accountId?: StringOrNull;
    onChangeAccountId?: (_: StringOrNull) => void;
    onSuccess?: () => void;
    onFailed?: () => void;
    onStart?: () => void;
    onUpdate?: () => void;
}
export interface TxState extends ExtrinsicAndSenders {
    isSending: boolean;
    accountId?: StringOrNull;
    onChangeAccountId: (_: StringOrNull) => void;
}
