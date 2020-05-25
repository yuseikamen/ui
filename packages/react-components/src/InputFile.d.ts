import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    accept?: string;
    clearContent?: boolean;
    convertHex?: boolean;
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    label: React.ReactNode;
    onChange?: (contents: Uint8Array, name: string) => void;
    placeholder?: React.ReactNode | null;
    withEllipsis?: boolean;
    withLabel?: boolean;
}
declare function InputFile({ accept, className, clearContent, convertHex, help, isDisabled, isError, label, onChange, placeholder, withEllipsis, withLabel }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof InputFile, any, {}, never>;
export default _default;
