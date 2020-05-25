/// <reference types="react" />
import { SubmittableExtrinsicFunction } from '@polkadot/api/promise/types';
import ApiPromise from '@polkadot/api/promise';
export declare type OmitProps<T, K> = Pick<T, Exclude<keyof T, K>>;
export declare type SubtractProps<T, K> = OmitProps<T, keyof K>;
export interface BareProps {
    className?: string;
    style?: Record<string, any>;
}
export interface ApiState {
    apiDefaultTx: SubmittableExtrinsicFunction;
    apiDefaultTxSudo: SubmittableExtrinsicFunction;
    isApiReady: boolean;
    isDevelopment: boolean;
    isSubstrateV2: boolean;
    systemChain: string;
    systemName: string;
    systemVersion: string;
}
export interface ApiProps extends ApiState {
    api: ApiPromise;
    isWaitingInjected: boolean;
    isApiConnected: boolean;
}
export interface OnChangeCbObs {
    next: (value?: any) => any;
}
export declare type OnChangeCbFn = (value?: any) => any;
export declare type OnChangeCb = OnChangeCbObs | OnChangeCbFn;
export interface ChangeProps {
    callOnResult?: OnChangeCb;
}
export interface CallState {
    callResult?: any;
    callUpdated?: boolean;
    callUpdatedAt?: number;
}
export declare type CallProps = ApiProps & CallState;
export declare type BaseProps<T> = BareProps & CallProps & ChangeProps & {
    children?: React.ReactNode;
    label?: string;
    render?: (value?: T) => React.ReactNode;
};
export declare type Formatter = (value?: any) => string;
