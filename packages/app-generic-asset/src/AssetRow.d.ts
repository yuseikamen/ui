import React from 'react';
import Row, { RowProps, RowState } from '@polkadot/react-components/Row';
import { I18nProps } from '@polkadot/react-components/types';
declare type Props = I18nProps & RowProps & {
    onSaveName: (name: string) => void;
    assetId: string;
};
declare class AssetRow extends Row<Props, RowState> {
    constructor(props: Props);
    render(): React.ReactNode;
    protected saveName: () => void;
    private renderAssetId;
}
declare const _default: React.ComponentType<Pick<Pick<Pick<Pick<import("../../react-components/src/types").BareProps & import("react-i18next").WithTranslation & RowProps & {
    onSaveName: (name: string) => void;
    assetId: string;
} & React.RefAttributes<AssetRow>, "type" | "className" | "style" | "children" | "ref" | "isInline" | "key" | "isEditable" | "t" | "iconInfo" | "i18n" | "tReady" | "buttons" | "accounts_info" | "extraInfo" | "withIcon" | "withTags" | "assetId" | "onSaveName"> & Partial<Pick<import("../../react-components/src/types").BareProps & import("react-i18next").WithTranslation & RowProps & {
    onSaveName: (name: string) => void;
    assetId: string;
} & React.RefAttributes<AssetRow>, "defaultName">> & Partial<Pick<{
    defaultName: string;
}, never>>, "type" | "className" | "style" | "children" | "ref" | "isInline" | "key" | "isEditable" | "t" | "defaultName" | "iconInfo" | "i18n" | "tReady" | "buttons" | "accounts_info" | "extraInfo" | "withIcon" | "withTags" | "assetId" | "onSaveName"> & Partial<Pick<import("../../react-components/src/types").BareProps & import("react-i18next").WithTranslation & RowProps & {
    onSaveName: (name: string) => void;
    assetId: string;
} & React.RefAttributes<AssetRow>, never>>, "type" | "className" | "style" | "children" | "ref" | "isInline" | "key" | "isEditable" | "t" | "defaultName" | "iconInfo" | "i18n" | "tReady" | "buttons" | "accounts_info" | "extraInfo" | "withIcon" | "withTags" | "assetId" | "onSaveName"> & {
    theme?: any;
} & {
    children?: React.ReactNode;
}, "type" | "className" | "style" | "children" | "ref" | "isInline" | "key" | "theme" | "isEditable" | "defaultName" | "iconInfo" | "buttons" | "accounts_info" | "extraInfo" | "withIcon" | "withTags" | "assetId" | "onSaveName"> & import("react-i18next").WithTranslationProps>;
export default _default;
