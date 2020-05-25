import { BareProps } from './types';
import React from 'react';
export interface TabItem {
    hasParams?: boolean;
    isExact?: boolean;
    isRoot?: boolean;
    name: string;
    text: React.ReactNode;
}
interface Props extends BareProps {
    basePath: string;
    hidden?: string[];
    items: TabItem[];
    isSequence?: boolean;
}
export default function Tabs(props: Props): React.ReactElement<Props>;
export {};
