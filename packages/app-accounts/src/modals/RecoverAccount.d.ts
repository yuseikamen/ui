import React from 'react';
interface Props {
    address: string;
    className?: string;
    onClose: () => void;
}
export default function RecoverAccount({ address, className, onClose }: Props): React.ReactElement;
export {};
