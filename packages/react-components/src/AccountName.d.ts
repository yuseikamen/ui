import { BareProps } from '@polkadot/react-api/types';
import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import React from 'react';
interface Props extends BareProps {
    children?: React.ReactNode;
    defaultName?: string;
    label?: React.ReactNode;
    onClick?: () => void;
    override?: React.ReactNode;
    toggle?: any;
    value?: AccountId | AccountIndex | Address | string | null | Uint8Array;
    withShort?: boolean;
}
declare function AccountName({ children, className, defaultName, label, onClick, override, style, toggle, value, withShort }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof AccountName, any, {}, never>;
export default _default;
