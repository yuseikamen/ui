import { DeriveAccountInfo, DerivedStakingAccount } from '@polkadot/api-derive/types';
import { ApiProps } from '@polkadot/react-api/types';
import { I18nProps } from '@polkadot/react-components/types';
import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
import { BalanceActiveType, ValidatorPrefsType } from './AddressInfo';
import Row, { RowProps, RowState as State } from './Row';
export interface Props extends I18nProps, RowProps {
    bonded?: BN | BN[];
    extraInfo?: [React.ReactNode, React.ReactNode][];
    isContract?: boolean;
    isDisabled?: boolean;
    isValid?: boolean;
    label?: string;
    accounts_info?: DeriveAccountInfo;
    noDefaultNameOpacity?: boolean;
    overlay?: React.ReactNode;
    stakingInfo?: DerivedStakingAccount;
    value: AccountId | AccountIndex | Address | string | null;
    withAddressOrName?: boolean;
    withBalance?: boolean | BalanceActiveType;
    withIndex?: boolean;
    withIndexOrAddress?: boolean;
    withSmallIcon?: boolean;
    withValidatorPrefs?: boolean | ValidatorPrefsType;
}
declare const DEFAULT_ADDR: string;
declare class AddressRow extends Row<ApiProps & Props, State> {
    state: State;
    constructor(props: ApiProps & Props);
    static getDerivedStateFromProps({ accounts_info, defaultName, isEditable, noDefaultNameOpacity, type, value }: Props, prevState: State): State | null;
    render(): React.ReactNode;
    private createState;
    protected renderAddressAndName(): React.ReactNode;
    private renderAddress;
    private renderAccountIndex;
    private renderBalances;
    private renderIcon;
    protected saveName: () => void;
    protected saveTags: () => void;
}
export { DEFAULT_ADDR, AddressRow };
declare const _default: React.ComponentType<any>;
export default _default;
