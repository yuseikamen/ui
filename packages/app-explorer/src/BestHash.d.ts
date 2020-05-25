import { BareProps, CallProps } from '@polkadot/react-api/types';
import React from 'react';
interface Props extends BareProps, CallProps {
    label?: React.ReactNode;
}
export default function BestHash({ className, label, style }: Props): React.ReactElement<Props>;
export {};
