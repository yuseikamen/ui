import React from 'react';
interface Props {
    memberCount?: number;
    onClose: () => void;
}
export default function Propose({ onClose, memberCount }: Props): React.ReactElement<Props>;
export {};
