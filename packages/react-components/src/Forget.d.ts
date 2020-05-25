import { CodeStored } from '@polkadot/app-contracts/types';
import React from 'react';
declare type Mode = 'account' | 'address' | 'contract' | 'code';
interface Props {
    address?: string;
    code?: CodeStored;
    name?: string;
    mode?: Mode;
    onClose: () => void;
    onForget: () => void;
}
export default function Forget(props: Props): React.ReactElement<Props>;
export {};
