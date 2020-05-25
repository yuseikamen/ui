import { BareProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends BareProps {
    children: React.ReactNode;
}
declare function Signer({ children, className, style }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof Signer, any, {}, never>;
export default _default;
