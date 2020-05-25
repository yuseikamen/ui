import React from 'react';
import { RuntimeVersion } from '@polkadot/types/interfaces';
interface Props {
    runtimeVersion: RuntimeVersion;
    _toggleModal: (arg0: string) => any;
}
declare function SideBarHeader({ _toggleModal, runtimeVersion }: Props): React.ReactElement<Props>;
export default SideBarHeader;
