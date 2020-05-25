import { EthereumAddress } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    button: React.ReactNode;
    className?: string;
    ethereumAddress: EthereumAddress | null;
}
declare function Claim({ button, className, ethereumAddress }: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof Claim, any, {}, never>;
export default _default;
