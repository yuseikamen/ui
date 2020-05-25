import React from 'react';
interface Props {
    className?: string;
    onClose: () => void;
}
export default function Propose({ className, onClose }: Props): React.ReactElement<Props>;
export {};
