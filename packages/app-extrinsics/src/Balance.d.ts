import { BareProps } from '@polkadot/react-api/types';
import React from 'react';
interface Props extends BareProps {
    label?: React.ReactNode;
    params?: any;
}
export default function BalanceDisplay({ className, label, params, style }: Props): React.ReactElement<Props>;
export {};
