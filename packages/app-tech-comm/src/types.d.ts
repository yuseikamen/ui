import { AccountId, Hash } from '@polkadot/types/interfaces';
export interface ComponentProps {
    className?: string;
    proposals?: Hash[];
    members?: AccountId[];
}
