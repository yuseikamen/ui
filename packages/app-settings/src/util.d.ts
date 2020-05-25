import { SettingsStruct } from '@polkadot/ui-settings/types';
import { Option } from './types';
export declare function createOption(t: (input: any) => string, { info, text, value, withI18n }: Option, overrides?: string[], override?: string): Option;
export declare function createIdenticon(t: (input: any) => string, { info, text, value, withI18n }: Option, overrides?: string[], override?: string): Option;
export declare function save(settings: SettingsStruct): void;
export declare function saveAndReload(settings: SettingsStruct): void;
