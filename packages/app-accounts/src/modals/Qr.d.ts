import { ModalProps } from '../types';
import React from 'react';
interface Props extends ModalProps {
    className?: string;
}
declare function QrModal({ className, onClose, onStatusChange }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof QrModal, any, {}, never>;
export default _default;
