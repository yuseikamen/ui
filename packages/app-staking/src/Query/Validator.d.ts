import { SessionRewards } from '../types';
import React from 'react';
interface Props {
    className?: string;
    sessionRewards: SessionRewards[];
    validatorId: string;
}
export default function Validator({ className, sessionRewards, validatorId }: Props): React.ReactElement<Props>;
export {};
