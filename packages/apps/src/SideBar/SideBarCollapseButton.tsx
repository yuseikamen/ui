import React from 'react';
import styled from 'styled-components';
import { Button } from '@polkadot/react-components';

interface Props {
  collapse: () => void;
  isCollapsed: boolean;
}

const StyledButton = styled(Button).attrs({
  isBasic: true,
  isCircular: true
})`
  position: absolute;
  right: -1.5rem;
  top: 2rem;
  width: 2rem;
  height: 2rem;
  z-index: 100;

  background: white !important;
  color: #3f3f3f !important;
  box-shadow: 0 0 0 1px #eee inset !important;
  margin: 0;
  transition: transform 0.15s;
`;

function SideBarCollapseButton ({ collapse, isCollapsed }: Props): React.ReactElement<Props> {
  return (
    <StyledButton
      icon={`angle double ${isCollapsed ? 'right' : 'left'}`}
      onClick={collapse}
    />
  );
}

export default SideBarCollapseButton;
