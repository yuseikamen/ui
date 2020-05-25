import React from 'react';
import ApiPromise from '@polkadot/api/promise';
interface Props {
    children: React.ReactNode;
    url?: string;
}
declare let api: ApiPromise;
export { api };
export default function Api({ children, url }: Props): React.ReactElement<Props> | null;
