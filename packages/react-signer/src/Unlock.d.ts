import React from 'react';
interface Props {
    autoFocus?: boolean;
    className?: string;
    error?: string;
    onChange: (password: string) => void;
    onEnter?: () => void;
    password: string;
    tabIndex?: number;
    value?: string | null;
}
declare function Unlock({ autoFocus, className, error, onChange, onEnter, password, tabIndex, value }: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof Unlock, any, {}, never>;
export default _default;
