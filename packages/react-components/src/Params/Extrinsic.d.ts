import { SubmittableExtrinsicFunction } from '@polkadot/api/types';
import { RawParamOnChange, RawParamOnEnter, RawParamOnEscape } from '@polkadot/react-params/types';
import { BareProps } from '../types';
import React from 'react';
interface Props extends BareProps {
    defaultValue: SubmittableExtrinsicFunction<'promise'>;
    isDisabled?: boolean;
    isError?: boolean;
    isPrivate: boolean;
    label: React.ReactNode;
    onChange?: RawParamOnChange;
    onEnter?: RawParamOnEnter;
    onEscape?: RawParamOnEscape;
    withLabel?: boolean;
}
export default function ExtrinsicDisplay(props: Props): React.ReactElement<Props>;
export {};
