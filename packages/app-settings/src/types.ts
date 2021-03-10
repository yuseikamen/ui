// Copyright 2017-2020 @polkadot/app-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import type { ExtDef } from '@polkadot/types/extrinsic/signedExtensions/types';
export interface Option {
  info?: string;
  text: React.ReactNode;
  value: string | number;
  withI18n?: boolean;
}
import type { MetadataDef } from '@polkadot/extension-inject/types';

export interface ChainInfo extends MetadataDef {
  color: string | undefined;
}
