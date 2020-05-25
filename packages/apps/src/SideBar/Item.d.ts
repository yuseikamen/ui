import { Route } from '@polkadot/apps-routing/types';
import React from 'react';
interface Props {
    isCollapsed: boolean;
    supportFontAwesomeIcon: boolean;
    onClick: () => void;
    route: Route;
}
export default function Item({ route, isCollapsed, supportFontAwesomeIcon, onClick }: Props): React.ReactElement<Props> | null;
export {};
