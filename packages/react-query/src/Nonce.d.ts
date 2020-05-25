import { BareProps } from '@polkadot/react-api/types';
import BN from 'bn.js';
import React from 'react';
interface Props extends BareProps {
    callOnResult?: (accountNonce: BN) => void;
    children?: React.ReactNode;
    label?: React.ReactNode;
    params?: string | null;
}
export default function Nonce({ children, className, label, params }: Props): React.ReactElement<Props>;
export {};
