import { Props as BaseProps } from '../types';
import React from 'react';
import { WithTranslation } from 'react-i18next';
interface Props extends BaseProps, WithTranslation {
}
export default function KeyValueArray({ className, defaultValue, isDisabled, isError, label, onChange, onEnter, onEscape, style, withLabel }: Props): React.ReactElement<Props>;
export {};
