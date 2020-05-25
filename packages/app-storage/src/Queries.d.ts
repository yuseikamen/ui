import { BareProps } from '@polkadot/react-components/types';
import { QueryTypes } from './types';
import React from 'react';
interface Props extends BareProps {
    onRemove: (id: number) => void;
    value?: QueryTypes[];
}
export default function Queries({ onRemove, value }: Props): React.ReactElement<Props> | null;
export {};
