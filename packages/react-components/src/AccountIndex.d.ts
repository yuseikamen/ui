import { AccountId, Address } from '@polkadot/types/interfaces';
import { BareProps } from '@polkadot/react-api/types';
import React from 'react';
interface Props extends BareProps {
    children?: React.ReactNode;
    defaultValue?: string;
    label?: React.ReactNode;
    value?: string | AccountId | Address | null | Uint8Array;
}
declare function AccountIndex({ children, className, defaultValue, label, style, value }: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof AccountIndex, any, {}, never>;
export default _default;
