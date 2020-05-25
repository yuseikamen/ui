import { BareProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends BareProps {
    onClose: () => void;
    address: string;
}
export default function ({ address, onClose }: Props): React.ReactElement<Props>;
export {};
