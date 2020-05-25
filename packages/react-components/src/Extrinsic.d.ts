import { SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api/types';
import { BareProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends BareProps {
    defaultValue: SubmittableExtrinsicFunction<'promise'>;
    isDisabled?: boolean;
    isError?: boolean;
    isPrivate?: boolean;
    label?: React.ReactNode;
    onChange: (method?: SubmittableExtrinsic<'promise'>) => void;
    onEnter?: () => void;
    onEscape?: () => void;
    withLabel?: boolean;
}
export default function ExtrinsicDisplay({ defaultValue, isDisabled, isError, isPrivate, label, onChange, onEnter, onEscape, withLabel }: Props): React.ReactElement<Props>;
export {};
