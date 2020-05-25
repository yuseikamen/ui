import { BareProps } from '@polkadot/react-api/types';
import BN from 'bn.js';
import React from 'react';
import { Compact } from '@polkadot/types';
interface Props extends BareProps {
    children?: React.ReactNode;
    label?: React.ReactNode;
    value?: Compact<any> | BN | string | null | 'all';
    withSi?: boolean;
}
declare function FormatBalance({ children, className, label, value, withSi }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof FormatBalance, any, {}, never>;
export default _default;
