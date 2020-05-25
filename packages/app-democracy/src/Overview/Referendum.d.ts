import { DerivedReferendum } from '@polkadot/api-derive/types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    idNumber: BN;
    value: DerivedReferendum;
}
declare function Referendum({ className, idNumber, value }: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof Referendum, any, {}, never>;
export default _default;
