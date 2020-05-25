/// <reference types="react" />
export interface Option {
    info?: string;
    text: React.ReactNode;
    value: string | number;
    withI18n?: boolean;
}
