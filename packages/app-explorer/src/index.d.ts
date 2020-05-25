import { AppProps, BareProps } from '@polkadot/react-components/types';
import { KeyedEvent } from './types';
import React from 'react';
interface Props extends AppProps, BareProps {
    newEvents?: KeyedEvent[];
}
declare function ExplorerApp({ basePath, className }: Props): React.ReactElement<Props>;
export default ExplorerApp;
