import React from 'react';
interface Props {
    address?: string | null;
    onChange: (isValid: boolean) => void;
}
export default function ValidateAddr({ address, onChange }: Props): React.ReactElement<Props> | null;
export {};
