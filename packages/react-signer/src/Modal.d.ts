import { SignerResult } from '@polkadot/api/types';
import { ApiProps } from '@polkadot/react-api/types';
import { I18nProps, BareProps } from '@polkadot/react-components/types';
import { SubjectInfo } from '@polkadot/ui-keyring/observable/types';
import { QueueTx, QueueTxMessageSetStatus } from '@polkadot/react-components/Status/types';
import BN from 'bn.js';
import React from 'react';
interface BaseProps extends BareProps {
    queue: QueueTx[];
    queueSetTxStatus: QueueTxMessageSetStatus;
}
interface Props extends I18nProps, ApiProps, BaseProps {
    allAccounts?: SubjectInfo;
}
interface State {
    accountNonce?: string;
    blocks: string;
    currentItem?: QueueTx;
    isQrScanning: boolean;
    isQrVisible: boolean;
    isRenderError: boolean;
    isSendable: boolean;
    isSubmit: boolean;
    isV2?: boolean;
    nonce?: string;
    password: string;
    qrAddress: string;
    qrPayload: Uint8Array;
    qrResolve?: (result: SignerResult) => void;
    qrReject?: (error: Error) => void;
    showTip: boolean;
    signedTx?: string;
    tip?: BN;
    unlockError?: string | null;
}
declare class Signer extends React.PureComponent<Props, State> {
    state: State;
    static getDerivedStateFromProps({ allAccounts, api, queue }: Props, { currentItem, password, unlockError }: State): Partial<State>;
    componentDidUpdate(): Promise<void>;
    render(): React.ReactNode;
    private renderButtons;
    private renderContent;
    private renderTip;
    private renderSignToggle;
    private renderSignFields;
    private onRenderError;
    private onShowTip;
    private onToggleSign;
    private onChangeNonce;
    private onChangeBlocks;
    private renderUnlock;
    private unlockAccount;
    private onChangePassword;
    private onChangeTip;
    private onCancelQr;
    private onCancelSign;
    private onCancel;
    private onSend;
    private updateNonce;
    private signQrPayload;
    private addQrSignature;
    private activateQrScanning;
    private sendRpc;
    private sendExtrinsic;
    private submitRpc;
    private makeExtrinsicCall;
    private makeSignedTransaction;
}
export { Signer };
declare const _default: React.ComponentType<any>;
export default _default;
