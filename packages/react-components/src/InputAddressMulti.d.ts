import React from 'react';
interface Props {
    available: string[];
    className?: string;
    help: React.ReactNode;
    label: React.ReactNode;
    maxCount: number;
    onChange: (values: string[]) => void;
    value: string[];
}
declare function InputAddressMulti({ available, className, help, label, maxCount, onChange, value }: Props): React.ReactElement<Props>;
declare const _default: import("styled-components").StyledComponent<typeof InputAddressMulti, any, {}, never>;
export default _default;
