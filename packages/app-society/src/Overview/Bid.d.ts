import { Bid } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    value: Bid;
}
export default function BidRow({ value: { who, kind, value } }: Props): React.ReactElement<Props>;
export {};
