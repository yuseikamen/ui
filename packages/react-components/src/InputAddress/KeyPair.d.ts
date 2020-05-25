import React from 'react';
interface Props {
    address: string;
    className?: string;
    isUppercase: boolean;
    name: string;
    style?: Record<string, string>;
}
declare function KeyPair({ address, className, style }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof KeyPair, any, {}, never>;
export default _default;
