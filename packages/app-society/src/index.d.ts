import { AppProps, BareProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends AppProps, BareProps {
}
export default function SocietyApp({ basePath, className }: Props): React.ReactElement<Props>;
export {};
