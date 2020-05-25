import { QueryTypes } from '../types';
import React from 'react';
interface Props {
    basePath: string;
    onAdd: (query: QueryTypes) => void;
}
export default function Selection({ basePath, onAdd }: Props): React.ReactElement<Props>;
export {};
