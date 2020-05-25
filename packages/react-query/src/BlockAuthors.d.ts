import React from 'react';
import { HeaderExtended } from '@polkadot/api-derive';
interface Authors {
    byAuthor: Record<string, string>;
    lastBlockAuthors?: string[];
    lastBlockNumber?: string;
    lastHeader?: HeaderExtended;
    lastHeaders: HeaderExtended[];
}
interface Props {
    children: React.ReactNode;
}
declare const BlockAuthorsContext: React.Context<Authors>;
declare const ValidatorsContext: React.Context<string[]>;
declare function BlockAuthors({ children }: Props): React.ReactElement<Props>;
export { BlockAuthorsContext, BlockAuthors, ValidatorsContext };
