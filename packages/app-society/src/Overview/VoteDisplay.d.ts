import { VoteType } from '../types';
import React from 'react';
interface Props {
    votes?: VoteType[];
}
export default function VoteDisplay({ votes }: Props): React.ReactElement<Props>;
export {};
