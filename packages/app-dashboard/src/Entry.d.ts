import { Route } from '@polkadot/apps-routing/types';
import React from 'react';
interface Props {
    className?: string;
    route: Route;
}
declare function Entry({ className, route: { i18n, icon, name } }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof Entry, any, {}, never>;
export default _default;
