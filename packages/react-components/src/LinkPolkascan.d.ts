import React from 'react';
export declare type LinkTypes = 'address' | 'block' | 'extrinsic';
interface Props {
    className?: string;
    data: string;
    type: LinkTypes;
    withShort?: boolean;
}
declare function LinkPolkascan({ className, data, type, withShort }: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof LinkPolkascan, any, {}, never>;
export default _default;
