import { CodeStored } from '@polkadot/app-contracts/types';
import React from 'react';
interface Props {
    code: CodeStored;
    onClose: () => void;
    onRemove: () => void;
}
export default function RemoveABI({ code, onClose, onRemove }: Props): React.ReactElement<Props>;
export {};
