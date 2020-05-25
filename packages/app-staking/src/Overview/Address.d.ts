import { Points } from '@polkadot/types/interfaces';
import { DerivedHeartbeatAuthor } from '@polkadot/api-derive/types';
import { ValidatorFilter } from '../types';
import React from 'react';
interface Props {
    address: string;
    className?: string;
    defaultName: string;
    filter: ValidatorFilter;
    filterName: string;
    hasQueries: boolean;
    heartbeat?: DerivedHeartbeatAuthor;
    isAuthor?: boolean;
    isElected: boolean;
    isFavorite: boolean;
    lastBlock?: string;
    myAccounts: string[];
    points?: Points;
    setNominators?: (nominators: string[]) => void;
    toggleFavorite: (accountId: string) => void;
    withNominations?: boolean;
}
export default function Address({ address, className, filter, filterName, hasQueries, heartbeat, isAuthor, isElected, isFavorite, lastBlock, myAccounts, points, setNominators, toggleFavorite, withNominations }: Props): React.ReactElement<Props> | null;
export {};
