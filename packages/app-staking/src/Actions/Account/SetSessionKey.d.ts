import React from 'react';
interface Props {
    controllerId: string;
    isOpen: boolean;
    onClose: () => void;
    sessionIds: string[];
    stashId: string;
}
export default function SetSessionKey({ controllerId, isOpen, onClose, sessionIds, stashId }: Props): React.ReactElement<Props> | null;
export {};
