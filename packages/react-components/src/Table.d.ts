import React from 'react';
interface BaseProps {
    children: React.ReactNode;
    className?: string;
}
declare type BodyProps = BaseProps;
declare type HeadProps = BaseProps;
declare type TableProps = BaseProps;
interface TableImpl {
    (props: TableProps): React.ReactElement<TableProps>;
    Body: (props: BodyProps) => React.ReactElement<BodyProps>;
    Head: (props: HeadProps) => React.ReactElement<HeadProps>;
}
declare const _default: TableImpl;
export default _default;
