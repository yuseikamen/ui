import React from 'react';
interface Props {
    accountId: string | null;
    controllerId: string | null;
    defaultController?: string;
    isUnsafeChain?: boolean;
    onError: (error: string | null) => void;
}
export default function ValidateController({ accountId, controllerId, defaultController, isUnsafeChain, onError }: Props): React.ReactElement<Props> | null;
export {};
