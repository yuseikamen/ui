import { Address, AccountId } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    defaultName?: string;
    onClickName?: () => void;
    overrideName?: React.ReactNode;
    toggle?: any;
    value?: string | Address | AccountId | null | Uint8Array;
}
declare function AddressSmall({ className, defaultName, onClickName, overrideName, toggle, value }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof AddressSmall, any, {}, never>;
export default _default;
