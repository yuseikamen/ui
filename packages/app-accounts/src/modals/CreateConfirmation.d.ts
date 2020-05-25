import React from 'react';
interface Props {
    address: string;
    name: string;
    onClose: () => void;
    onCommit: () => void;
}
export default function CreateConfirmation({ address, name, onClose, onCommit }: Props): React.ReactElement<Props> | null;
export {};
