// Copyright 2017-2021 @polkadot/app-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ChainInfo } from '../types';

import React, { useCallback, useMemo, useState } from 'react';

//import { extensionLogos } from '@polkadot/apps-config';
import { Button, Dropdown, Table } from '@polkadot/react-components';
import { useToggle } from '@polkadot/react-hooks';

import { useTranslation } from '../translate';
import useExtensions from '../useExtensions';
import iconOption from './iconOption';

interface Props {
  chainInfo: ChainInfo | null;
  className?: string;
}

function Extensions ({ chainInfo, className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { extensions } = useExtensions();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isBusy, toggleBusy] = useToggle();
  console.log('Extensions:', extensions);
  const options = useMemo(
    () => (extensions || []).map(({ extension: { name, version } }, value) =>
      iconOption(`${name} ${version}`, value, '')),
    [extensions]
  );
  const _updateMeta = useCallback(
    (): void => {
      console.log('***************');
      console.log('Inside update metadata call::');
      console.log('selectedIndex:',selectedIndex);
      console.log('chainInfo:',chainInfo);
      console.log('extensions?.[selectedIndex]:',extensions?.[selectedIndex]);
      if (chainInfo && extensions?.[selectedIndex]) {
        toggleBusy();
        try {
          extensions[selectedIndex]
            .update(chainInfo)
            .catch(() => false)
            .then(() => toggleBusy())
            .catch(console.error);
        } catch (e) {
          console.log('Err:',e);
        }
      }
    },
    [chainInfo, extensions, selectedIndex, toggleBusy]
  );

  // const headerRef = useRef([
  //   [t('  Extensions'), 'start']
  // ]);

  return (
    <Table
      className={className}
      // empty={t<string>('No Upgradable extensions')}
      // header={headerRef.current}
    >
    <tbody>
      {extensions
        ? options.length !== 0 && (
          <>
            <tr>
              <td>
                <Dropdown
                  label={t<string>('upgradable extensions')}
                  onChange={setSelectedIndex}
                  options={options}
                  value={selectedIndex}
                />
              </td>
            </tr>

            <tr className='isOdd'>
              <td>
                <Button.Group>
                  <Button
                    icon='upload'
                    isDisabled={isBusy}
                    label={t<string>('Update metadata')}
                    onClick={_updateMeta}
                  />
                </Button.Group>
              </td>
            </tr>
          </>
        )
        : null
      }
    </tbody>
    </Table>
  );
}

export default React.memo(Extensions);
