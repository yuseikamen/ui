import { DeriveAccountInfo } from '@polkadot/api-derive/types';
import { KeyringItemType } from '@polkadot/ui-keyring/types';
import React from 'react';
export declare const styles = "\n  text-align: left;\n\n  &.isDisabled {\n    opacity: 0.6;\n\n    .ui--IdentityIcon  {\n      filter: grayscale(100%);\n    }\n  }\n\n  &.isInline {\n    display: flex;\n\n    .ui--Row-accountId {\n      white-space: nowrap;\n    }\n  }\n\n  &.isInvalid {\n    .ui--Row-accountId,\n    .ui--Row-icon {\n      filter: grayscale(100);\n      opacity: 0.5;\n    }\n  }\n\n  button.ui.icon.editButton {\n    padding: 0em .3em .3em .3em;\n    color: #2e86ab;\n    background: none;\n    /*trick to let the button in the flow but keep the content centered regardless*/\n    margin-left: -2em;\n    position: relative;\n    right: -2.3em;\n    z-index: 1;\n  }\n\n  .editSpan {\n    white-space: nowrap;\n\n    &:before {\n      content: '';\n    }\n  }\n\n  .ui--Row-accountId,\n  .ui--Row-accountIndex {\n    font-family: monospace;\n    font-size: 1.25em;\n    padding: 0;\n    margin-bottom: 0.25rem;\n  }\n\n  .ui--Row-balances {\n    display: flex;\n    .column {\n      display: block;\n\n      label,\n      .result {\n        display: inline-block;\n        vertical-align: middle;\n      }\n    }\n\n    > span {\n      text-align: left;\n    }\n  }\n\n  .ui--Row-base {\n    display: flex;\n  }\n\n  .ui--Row-buttons {\n    position: relative;\n    margin-right: -0.5rem;\n    margin-top: -0.5rem;\n    white-space: nowrap;\n    height: 0rem;\n    overflow: visible;\n\n    button.ui.button:last-child {\n      margin-right: 0;\n    }\n  }\n\n  .ui--Row-children {\n    display: block;\n    padding-left: 1rem;\n    padding-top: 1rem;\n  }\n\n  .ui--Row-details {\n    flex: 1;\n    margin-right: 1rem;\n    padding: 0.25rem 0 0;\n    width: 100%;\n    min-width: 0;\n\n    .account-label{\n      margin: -0.75rem 0 0 0\n    }\n\n    * {\n      vertical-align: middle;\n    }\n  }\n\n  .ui--Row-icon {\n    flex: 0;\n    margin-right: 1em;\n    position: relative;\n\n    .ui--Row-icon-info {\n      left: -0.5rem;\n      position: absolute;\n      top: -0.5rem;\n    }\n  }\n\n  .ui--Row-address-or-name {\n    display: flex;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: normal;\n\n    .withName {\n      white-space: nowrap;\n      text-transform: uppercase;\n      overflow: hidden;\n      text-overflow: inherit;\n    }\n  }\n\n  .ui--Row-name-input {\n    input {\n      height: 1em;\n      text-transform: uppercase;\n      margin-top: -0.3em;\n    }\n\n  }\n\n  .ui--Row-tags {\n    &.editable {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: left;\n\n      .addTags {\n        border: 1px #00000052 solid;\n        border-radius: .5em;\n        border-style: dashed;\n        color: grey;\n        font-size: x-small;\n        padding: .1em 0.3em 0.1em 0.3em;\n        margin-top: .2em;\n      }\n\n      > div.label {\n        margin-top:.3em\n      }\n    }\n  }\n\n  .ui--Row-tags-input {\n    margin-bottom: -1.4em;\n  }\n";
export interface RowProps {
    accounts_info?: DeriveAccountInfo;
    buttons?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    defaultName?: string;
    extraInfo?: React.ReactNode;
    iconInfo?: React.ReactNode;
    isEditable?: boolean;
    isInline?: boolean;
    type?: KeyringItemType;
    withIcon?: boolean;
    withTags?: boolean;
}
export interface RowState {
    address: string;
    isEditingName: boolean;
    isEditingTags: boolean;
    name: string;
    tags: string[];
}
export default class Row<P extends RowProps, S extends RowState> extends React.PureComponent<P, S> {
    state: S;
    static defaultProps: {
        defaultName: string;
    };
    protected onChangeName: (name: string) => void;
    protected onChangeTags: (tags: string[]) => void;
    protected renderButtons(): React.ReactNode;
    protected renderChildren(): React.ReactNode;
    protected renderEditIcon(): React.ReactNode;
    protected renderName(withCopy?: boolean): React.ReactNode;
    protected renderTags(): React.ReactNode;
    protected saveName: () => void;
    protected saveTags: () => void;
    protected toggleNameEditor: () => void;
    protected toggleTagsEditor: () => void;
}
