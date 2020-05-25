import { Props as BareProps, RawParam } from '../types';
import React from 'react';
interface Props extends BareProps {
    defaultValue: RawParam;
    withLabel?: boolean;
}
export default function Unknown(props: Props): React.ReactElement<Props>;
export {};
