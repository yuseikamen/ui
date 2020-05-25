import { Signer, SignerResult } from '@polkadot/api/types';
import { SignerPayloadJSON } from '@polkadot/types/types';
export declare class LedgerSigner implements Signer {
    signPayload(payload: SignerPayloadJSON): Promise<SignerResult>;
}
declare const ledgerSigner: LedgerSigner;
export default ledgerSigner;
