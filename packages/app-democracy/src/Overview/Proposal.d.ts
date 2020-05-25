import { DeriveProposal } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    value: DeriveProposal;
}
declare function Proposal({ className, value: { balance, hash, index, proposal, proposer, seconds } }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof Proposal, any, {}, never>;
export default _default;
