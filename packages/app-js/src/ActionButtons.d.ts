import { BareProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends BareProps {
    isCustomExample: boolean;
    isRunning: boolean;
    removeSnippet: () => void;
    runJs: () => void;
    saveSnippet: (snippetName: string) => void;
    snippetName?: string;
    stopJs: () => void;
}
export default function ActionButtons({ className, isCustomExample, isRunning, removeSnippet, runJs, saveSnippet, stopJs }: Props): React.ReactElement<Props>;
export {};
