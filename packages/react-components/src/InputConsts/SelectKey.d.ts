import { DropdownOptions } from '../util/types';
import { BareProps } from '../types';
import { ConstValueBase } from './types';
import React from 'react';
interface Props extends BareProps {
    isError?: boolean;
    onChange: (value: ConstValueBase) => void;
    options: DropdownOptions;
    value: ConstValueBase;
}
export default function SelectKey(props: Props): React.ReactElement<Props> | null;
export {};
