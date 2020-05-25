import BN from 'bn.js';
export interface ExtraFees {
    extraAmount: BN;
    extraFees: BN;
    extraWarn: boolean;
}
