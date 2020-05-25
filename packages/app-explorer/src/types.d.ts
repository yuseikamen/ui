import { EventRecord } from '@polkadot/types/interfaces';
export interface KeyedEvent {
    key: string;
    record: EventRecord;
}
