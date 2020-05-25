import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import { BareProps } from './types';
import BN from 'bn.js';
import React from 'react';
import { KeyringItemType } from '@polkadot/ui-keyring/types';
interface Props extends BareProps {
    balance?: BN | BN[];
    bonded?: BN | BN[];
    children?: React.ReactNode;
    iconInfo?: React.ReactNode;
    isPadded?: boolean;
    isShort?: boolean;
    label?: React.ReactNode;
    type?: KeyringItemType;
    value?: AccountId | AccountIndex | Address | string | null | Uint8Array;
    withAddress?: boolean;
    withBalance?: boolean;
    withBonded?: boolean;
    withLockedVote?: boolean;
    withName?: boolean;
    withShrink?: boolean;
}
declare function AddressMini({ balance, bonded, children, className, iconInfo, isPadded, label, style, value, withAddress, withBalance, withBonded, withLockedVote, withName, withShrink }: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof AddressMini, any, {}, never>;
export default _default;
