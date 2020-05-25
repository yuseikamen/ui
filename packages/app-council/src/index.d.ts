import { AppProps, BareProps } from '@polkadot/react-components/types';
import React from 'react';
import useCounter from './useCounter';
export { useCounter };
interface Props extends AppProps, BareProps {
}
declare function CouncilApp({ basePath, className }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof CouncilApp, any, {}, never>;
export default _default;
