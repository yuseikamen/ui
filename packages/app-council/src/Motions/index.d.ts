import { DerivedCollectiveProposals } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    motions?: DerivedCollectiveProposals;
}
export default function Proposals({ className, motions }: Props): React.ReactElement<Props>;
export {};
