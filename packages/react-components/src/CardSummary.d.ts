import { BareProps } from './types';
import BN from 'bn.js';
import React from 'react';
import { UInt } from '@polkadot/types';
import { Colors as ProgressColors } from './Progress';
interface ProgressProps {
    color?: ProgressColors;
    hideValue?: boolean;
    isPercent?: boolean;
    total?: BN | UInt;
    value?: BN | UInt;
}
interface Props extends BareProps {
    children?: React.ReactNode;
    help?: React.ReactNode;
    label: React.ReactNode;
    progress?: ProgressProps;
}
declare function CardSummary({ children, className, help, label, progress }: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof CardSummary, any, {}, never>;
export default _default;
