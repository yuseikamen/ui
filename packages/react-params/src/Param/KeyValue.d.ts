import { Props } from '../types';
import React from 'react';
interface StateParam {
    isValid: boolean;
    u8a: Uint8Array;
}
export declare function createParam(hex: string | String, length?: number): StateParam;
export default function KeyValue({ className, isDisabled, label, onChange, onEnter, style, withLabel }: Props): React.ReactElement<Props>;
export {};
