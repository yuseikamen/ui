import BN from 'bn.js';
import React from 'react';
interface Props {
    unstakeThreshold: BN | undefined;
    onError: (error: string | null) => void;
}
export default function InputValidationUnstakeThreshold({ onError, unstakeThreshold }: Props): React.ReactElement<Props> | null;
export {};
