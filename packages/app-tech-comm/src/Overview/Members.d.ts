import { AccountId } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    members?: AccountId[];
}
export default function Members({ className, members }: Props): React.ReactElement<Props>;
export {};
