import { I18nProps } from '@polkadot/react-components/types';
import React from 'react';
import { ComponentProps } from './types';
interface Props extends I18nProps, ComponentProps {
}
declare function SetKey({ allAccounts, className, isMine, sudoKey }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof SetKey, any, {}, never>;
export default _default;
