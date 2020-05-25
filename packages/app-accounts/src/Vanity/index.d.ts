import { I18nProps } from '@polkadot/react-components/types';
import { KeypairType } from '@polkadot/util-crypto/types';
import { GeneratorMatches } from '../vanitygen/types';
import { ComponentProps } from '../types';
import React from 'react';
import { TxComponent } from '@polkadot/react-components';
interface Props extends ComponentProps, I18nProps {
}
interface State {
    createSeed: string | null;
    elapsed: number;
    isMatchValid: boolean;
    isRunning: boolean;
    keyCount: 0;
    keyTime: 0;
    match: string;
    matches: GeneratorMatches;
    startAt: number;
    type: KeypairType;
    withCase: boolean;
    withHex: boolean;
}
declare class VanityApp extends TxComponent<Props, State> {
    private results;
    state: State;
    private _isActive;
    componentWillUnmount(): void;
    render(): React.ReactNode;
    private renderButtons;
    private renderMatches;
    private renderOptions;
    private renderStats;
    private checkMatches;
    private executeGeneration;
    private onCreateToggle;
    private onChangeCase;
    private onChangeMatch;
    private onChangeType;
    private onRemove;
    private toggleStart;
    private closeCreate;
}
declare const _default: React.ComponentType<Pick<Pick<Pick<Props & React.RefAttributes<VanityApp>, "className" | "style" | "ref" | "key" | "t" | "i18n" | "tReady" | "basePath" | "onStatusChange"> & Partial<Pick<Props & React.RefAttributes<VanityApp>, never>>, "className" | "style" | "ref" | "key" | "t" | "i18n" | "tReady" | "basePath" | "onStatusChange"> & {
    theme?: any;
} & {
    children?: React.ReactNode;
}, "className" | "style" | "children" | "ref" | "key" | "theme" | "basePath" | "onStatusChange"> & import("react-i18next").WithTranslationProps>;
export default _default;
