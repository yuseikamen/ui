import { AccountId } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    voters: AccountId[];
}
export default function Voters({ voters }: Props): React.ReactElement<Props> | null;
export {};
