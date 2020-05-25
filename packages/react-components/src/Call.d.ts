import { IExtrinsic, IMethod } from '@polkadot/types/types';
import { BareProps } from './types';
import BN from 'bn.js';
import React from 'react';
export interface Props extends BareProps {
    children?: React.ReactNode;
    labelHash?: React.ReactNode;
    mortality?: string;
    onError?: () => void;
    value: IExtrinsic | IMethod;
    withHash?: boolean;
    tip?: BN;
}
declare function Call({ children, className, labelHash, mortality, onError, style, tip, value, withHash }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof Call, any, {}, never>;
export default _default;
