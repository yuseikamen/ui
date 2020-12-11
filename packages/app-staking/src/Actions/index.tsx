// Copyright 2017-2020 @polkadot/app-staking authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.


import React from 'react';
import {BareProps} from "@polkadot/react-components/types";

interface Props extends BareProps {
  isVisible: boolean;
}

export default function Actions ({ className, isVisible }: Props): React.ReactElement<Props> {
  return (
    <div className={`${className} ${!isVisible && 'staking--hidden'}`}>

    </div>
  );
}
