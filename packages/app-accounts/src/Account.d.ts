import React from 'react';
interface Props {
    address: string;
    className?: string;
    filter: string;
    isFavorite: boolean;
    toggleFavorite: (address: string) => void;
}
declare function Account({ address, className, filter, isFavorite, toggleFavorite }: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof Account, any, {}, never>;
export default _default;
