import { BareProps } from './types';
import React from 'react';
interface ModalProps extends BareProps {
    children: React.ReactNode;
    header?: React.ReactNode;
    open?: boolean;
    [index: string]: any;
}
interface ActionsProps extends BareProps {
    cancelLabel?: string;
    children: React.ReactNode;
    withOr?: boolean;
    onCancel: () => void;
}
declare function Modal(props: ModalProps): React.ReactElement<ModalProps>;
declare namespace Modal {
    var Actions: ({ cancelLabel, className, children, withOr, onCancel }: ActionsProps) => React.ReactElement<ActionsProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    var Content: React.StatelessComponent<import("semantic-ui-react").ModalContentProps>;
    var Header: React.StatelessComponent<import("semantic-ui-react").ModalHeaderProps>;
    var Description: React.StatelessComponent<import("semantic-ui-react").ModalDescriptionProps>;
}
export default Modal;
