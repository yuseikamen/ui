import React from 'react';
interface Props {
    className?: string;
    genesisHash: string | null;
    isDisabled?: boolean;
    onChange: (genesisHash: string | null) => void;
    preventDefault?: boolean;
}
declare function ChainLock({ className, genesisHash, isDisabled, onChange, preventDefault }: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof ChainLock, any, {}, never>;
export default _default;
