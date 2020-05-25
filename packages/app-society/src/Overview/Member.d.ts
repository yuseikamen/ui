import { DeriveSocietyMember } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    value: DeriveSocietyMember;
}
export default function Member({ value: { accountId, strikes } }: Props): React.ReactElement<Props>;
export {};
