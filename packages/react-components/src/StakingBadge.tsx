// Copyright 2017-2020 @polkadot/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { IconName } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';
import styled from 'styled-components';

import Icon from './IconStaking';
import Tooltip from './Tooltip';

interface Props {
  className?: string;
  color: 'blue' | 'counter' | 'counterInvert' | 'gray' | 'green' | 'highlight' | 'normal' | 'purple' | 'red' | 'transparent';
  hover?: React.ReactNode;
  icon?: IconName;
  info?: React.ReactNode;
  isSmall?: boolean;
  onClick?: () => void;
}

const HIGHLIGHTS = ['counter', 'highlight'];

let badgeId = 0;

function Badge ({ className = '', color = 'normal', hover, icon, info, isSmall, onClick }: Props): React.ReactElement<Props> | null {
  const [trigger] = useState(`badge-hover-${Date.now()}-${badgeId++}`);
  const extraProps = hover
    ? { 'data-for': trigger, 'data-tip': true }
    : {};
  const isHighlight = HIGHLIGHTS.includes(color);

  return (
    <div
      {...extraProps}
      className={`ui--Badge${hover ? ' isTooltip' : ''}${isSmall ? ' isSmall' : ''}${onClick ? ' isClickable' : ''}${isHighlight ? ' highlight--bg' : ''}${color === 'counterInvert' ? ' highlight--bg-contrast highlight--color' : ''} ${color}Color ${className}`}
      onClick={onClick}
    >
      {info || (icon && <Icon icon={icon} />)}
      {hover && (
        <Tooltip
          text={hover}
          trigger={trigger}
        />
      )}
    </div>
  );
}

export default React.memo(styled(Badge)`
  border-radius: 14px;
  color: #eeedec;
  display: inline-block;
  font-size: 14px;
  line-height: 24px;
  height: 24px;
  margin-right: 0.25rem;
  min-width: 24px;
  text-align: center;

  &.isTooltip {
    cursor: help;
  }

  .ui--Icon {
    cursor: inherit;
    vertical-align: middle;
    width: 1em;
  }

  &.isClickable {
    cursor: pointer;
  }

  &.isSmall {
    font-size: 14px;
    height: 14px;
    line-height: 14px;
    min-width: 14px;
    padding: 0;
    width: 14px;
  }

  &.blueColor {
    background: steelblue;
  }

  &.counterColor,
  &.counterInvertColor {
    margin: 0 0.5rem;
    vertical-align: middle;
  }

  &.grayColor {
    background: #eeedec !important;
    color: #aaa9a8;
  }

  &.redColor {
    background: darkred;
  }

  &.greenColor {
    background: green;
  }

  &.yellowColor {
    background: #e6ca36;
  }

  &.purpleColor {
    background: indigo;
  }

  &.transparentColor {
    background: transparent;
    box-shadow: none;
  }
`);
