import React from 'react';
import { EventRecord } from '@polkadot/types/interfaces';
interface KeyedEvent {
    key: string;
    record: EventRecord;
}
declare type Events = KeyedEvent[];
interface Props {
    children: React.ReactNode;
}
declare const EventsContext: React.Context<Events>;
declare function Events({ children }: Props): React.ReactElement<Props>;
export { EventsContext, Events };
