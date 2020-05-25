import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    children?: React.ReactNode;
    defaultValue?: string | null;
    help?: React.ReactNode;
    isFull?: boolean;
    label?: React.ReactNode;
    onChange?: (address: string | null) => void;
    onEnter?: () => void;
    onEscape?: () => void;
}
declare function InputAddressSimple({ children, className, defaultValue, help, isFull, label, onChange, onEnter, onEscape }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof InputAddressSimple, any, {}, never>;
export default _default;
