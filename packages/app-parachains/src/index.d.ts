import { AppProps, BareProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends AppProps, BareProps {
}
export default function ParachainsApp({ basePath }: Props): React.ReactElement<Props>;
export {};
