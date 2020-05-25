import { SessionRewards } from '../types';
import React from 'react';
interface Props {
    className?: string;
    sessionRewards: SessionRewards[];
}
export default function Query({ className, sessionRewards }: Props): React.ReactElement<Props>;
export {};
