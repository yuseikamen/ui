import { BareProps, StringOrNull } from '@polkadot/react-components/types';
import React from 'react';
import { PromiseContract as ApiContract } from '@polkadot/api-contract';
interface Props extends BareProps {
    callContract: ApiContract | null;
    callMessageIndex: number | null;
    isOpen: boolean;
    onChangeCallContractAddress: (callContractAddress: StringOrNull) => void;
    onChangeCallMessageIndex: (callMessageIndex: number) => void;
    onClose: () => void;
}
declare function Call(props: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof Call, any, {}, never>;
export default _default;
