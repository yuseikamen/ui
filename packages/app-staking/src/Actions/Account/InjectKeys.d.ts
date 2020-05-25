import React from 'react';
interface Props {
    isOpen?: boolean;
    onClose: () => void;
}
export default function InjectKeys({ isOpen, onClose }: Props): React.ReactElement<Props> | null;
export {};
