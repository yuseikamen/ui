import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    asSwitch?: boolean;
    defaultValue?: boolean;
    isDisabled?: boolean;
    label: React.ReactNode;
    onChange?: (isChecked: boolean) => void;
    preventDefault?: boolean;
    value?: boolean;
}
declare function Toggle({ className, asSwitch, defaultValue, isDisabled, onChange, preventDefault, value, label }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof Toggle, any, {}, never>;
export default _default;
