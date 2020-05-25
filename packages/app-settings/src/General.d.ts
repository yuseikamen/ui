import React from 'react';
interface Props {
    className?: string;
    isModalContent?: boolean;
    onClose: () => void;
}
export default function General({ className, isModalContent, onClose }: Props): React.ReactElement<Props>;
export {};
