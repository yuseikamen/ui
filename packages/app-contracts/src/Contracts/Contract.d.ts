import React from 'react';
import { RouteComponentProps } from 'react-router';
import { PromiseContract as ApiContract } from '@polkadot/api-contract';
interface Props extends RouteComponentProps {
    basePath: string;
    contract: ApiContract;
    onCall: (_?: number) => () => void;
}
declare function Contract(props: Props): React.ReactElement<Props> | null;
declare const _default: React.ComponentClass<Pick<Props, "contract" | "basePath" | "onCall">, any> & import("react-router").WithRouterStatics<typeof Contract>;
export default _default;
