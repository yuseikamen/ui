import React from 'react';
interface Props {
    address: string;
    className?: string;
    filter?: string;
    onChange?: (isChecked: boolean) => void;
    value: boolean;
}
declare function AddressToggle({ address, className, filter, onChange, value }: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof AddressToggle, any, {}, never>;
export default _default;
