import { AppProps, BareProps } from '@polkadot/react-components/types';
import React from 'react';
export { default as useCounter } from './useCounter';
interface Props extends AppProps, BareProps {
}
export default function DemocracyApp({ basePath }: Props): React.ReactElement<Props>;
