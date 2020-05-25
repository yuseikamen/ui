import { Props as BareProps, RawParam } from '../types';
import React from 'react';
interface Props extends BareProps {
    asHex?: boolean;
    children?: React.ReactNode;
    defaultValue: RawParam;
    withLabel?: boolean;
}
export default function StaticParam({ asHex, children, className, defaultValue, label, style }: Props): React.ReactElement<Props>;
export {};
