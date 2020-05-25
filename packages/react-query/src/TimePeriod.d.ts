import { BareProps } from '@polkadot/react-api/types';
import React from 'react';
interface Props extends BareProps {
    children?: React.ReactNode;
    label?: React.ReactNode;
}
export default function TimePeriod({ children, className, label, style }: Props): React.ReactElement<Props>;
export {};
