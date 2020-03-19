import React from 'react';
import styled from 'styled-components';

const SideBarScroll = styled.div.attrs({
  className: 'apps--SideBar-Scroll'
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
  padding: 0 1rem;

  &::-webkit-scrollbar {
    display: none;
    width: 0px;
  }
`;

export default SideBarScroll;
