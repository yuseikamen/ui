import { PrefabWasmModule } from '@polkadot/types/interfaces';
import { I18nProps } from '@polkadot/react-components/types';
import { ApiProps } from '@polkadot/react-api/types';
import React from 'react';
import { Option } from '@polkadot/types';
interface Props extends ApiProps, I18nProps {
    codeHash?: string | null;
    contracts_codeStorage?: Option<PrefabWasmModule>;
    onChange: (isValid: boolean) => void;
}
declare const _default: React.ComponentType<Pick<Pick<Props, "onChange" | "className" | "style" | "t" | "i18n" | "tReady" | "codeHash" | "contracts_codeStorage">, "onChange" | "className" | "style" | "codeHash" | "contracts_codeStorage"> & import("react-i18next").WithTranslationProps>;
export default _default;
