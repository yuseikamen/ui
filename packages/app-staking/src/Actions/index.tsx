// Copyright 2017-2020 @polkadot/app-staking authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.


import React from 'react';


interface Props {
  allStashes: string[];
  className?: string;
  isVisible: boolean;
  recentlyOnline?: any;
  next: string[];
  stakingOverview?: any;
}


export default function Actions ({ allStashes, className, isVisible, next, recentlyOnline, stakingOverview }: Props): React.ReactElement<Props> {


  return (
    <div className={`${className} ${!isVisible && 'staking--hidden'}`}>

    </div>
  );
}
