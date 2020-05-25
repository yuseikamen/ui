import { CreateResult } from '@polkadot/ui-keyring/types';
import { KeypairType } from '@polkadot/util-crypto/types';
import { ModalProps } from '../types';
import React from 'react';
interface Props extends ModalProps {
    className?: string;
    seed?: string;
    type?: KeypairType;
}
export declare function downloadAccount({ json, pair }: CreateResult): void;
declare function Create({ className, onClose, onStatusChange, seed: propsSeed, type: propsType }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof Create, any, {}, never>;
export default _default;
