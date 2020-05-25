import { Codec } from '@polkadot/types/types';
import { CallOptions, CallParam, CallParams } from './types';
interface TrackFnCallback {
    (value: Codec): void;
}
declare type TrackFnResult = Promise<() => void>;
interface TrackFn {
    (a: CallParam, b: CallParam, c: CallParam, cb: TrackFnCallback): TrackFnResult;
    (a: CallParam, b: CallParam, cb: TrackFnCallback): TrackFnResult;
    (a: CallParam, cb: TrackFnCallback): TrackFnResult;
    (cb: TrackFnCallback): TrackFnResult;
    meta?: {
        type: {
            isDoubleMap: boolean;
        };
    };
}
export default function useCall<T>(fn: TrackFn | undefined | null, params?: CallParams, options?: CallOptions<T>): T | undefined;
export {};
