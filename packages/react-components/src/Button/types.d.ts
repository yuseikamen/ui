/// <reference types="react" />
import { BareProps } from '../types';
export declare type Button$Sizes = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
export declare type Button$OnClick = () => void | Promise<void>;
export interface ButtonProps extends BareProps {
    children?: React.ReactNode;
    floated?: 'left' | 'right';
    icon: string;
    isBasic?: boolean;
    isCircular?: boolean;
    isDisabled?: boolean;
    isFluid?: boolean;
    isLoading?: boolean;
    isNegative?: boolean;
    isPositive?: boolean;
    isPrimary?: boolean;
    label?: React.ReactNode;
    labelPosition?: 'left' | 'right';
    onClick?: Button$OnClick;
    ref?: any;
    size?: Button$Sizes;
    tabIndex?: number;
    tooltip?: React.ReactNode;
}
export declare type DividerProps = BareProps;
export interface GroupProps extends BareProps {
    children?: React.ReactNode;
    isBasic?: boolean;
    isCentered?: boolean;
}
export declare type GroupType = React.ComponentType<GroupProps> & {
    Divider: React.ComponentType<DividerProps>;
};
export declare type ButtonType = React.ComponentType<ButtonProps> & {
    Divider: React.ComponentType<DividerProps>;
    Group: GroupType;
    Or: React.ComponentType<BareProps>;
};
