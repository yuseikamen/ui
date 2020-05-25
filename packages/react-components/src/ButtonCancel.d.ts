import React from 'react';
interface Props {
    className?: string;
    isDisabled?: boolean;
    label?: string;
    onClick: () => void;
    tabIndex?: number;
}
export default function ButtonCancel({ className, isDisabled, label, onClick, tabIndex }: Props): React.ReactElement<Props>;
export {};
