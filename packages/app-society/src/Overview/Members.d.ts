import { DeriveSociety } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    info?: DeriveSociety;
}
export default function Members({ className, info }: Props): React.ReactElement<Props>;
export {};
