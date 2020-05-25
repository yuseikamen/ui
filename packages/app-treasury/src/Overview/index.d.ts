import { AppProps, BareProps, I18nProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends AppProps, BareProps, I18nProps {
}
export default function Overview({ className }: Props): React.ReactElement<Props>;
export {};
