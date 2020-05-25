/// <reference types="react" />
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import { AppProps, BareProps } from '@polkadot/react-components/types';
export interface RouteProps extends AppProps, BareProps {
    location: any;
}
export interface Route {
    Component: React.ComponentType<RouteProps>;
    Modal?: React.ComponentType<any>;
    isIgnored?: boolean;
    useCheck?: () => boolean;
    useCounter?: () => number;
    display: {
        isHidden?: boolean;
        isModal?: boolean;
        needsAccounts?: boolean;
        needsApi?: (string | string[])[];
        needsSudo?: boolean;
    };
    i18n: {
        defaultValue: string;
    };
    icon: SemanticICONS | any;
    name: string;
    isAdvanced?: boolean;
}
export declare type Routes = (Route | null)[];
export interface Routing {
    default: string;
    routes: Routes;
}
