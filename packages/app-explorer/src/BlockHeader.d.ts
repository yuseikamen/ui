import { BareProps } from '@polkadot/react-components/types';
import React from 'react';
import { HeaderExtended } from '@polkadot/api-derive';
interface Props extends BareProps {
    isSummary?: boolean;
    value?: HeaderExtended;
    withExplorer?: boolean;
    withLink?: boolean;
}
declare function BlockHeader({ className, isSummary, value, withExplorer, withLink }: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof BlockHeader, any, {}, never>;
export default _default;
