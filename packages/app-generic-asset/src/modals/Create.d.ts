import BN from 'bn.js';
import React from 'react';
export interface ModalProps {
    onClose: () => void;
    onRegister: (id: BN, name: string) => void;
}
interface Props extends ModalProps {
    className?: string;
}
export default function Create({ onClose, onRegister }: Props): React.ReactElement<Props>;
export {};
