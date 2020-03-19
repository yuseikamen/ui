import styled from 'styled-components';
import { colors } from '../../../../styled-theming';

const SideBarScroll = styled.div.attrs({
  className: 'apps--SideBar-Scroll'
})`
  align-items: center;
  color: ${colors.textMuted};
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
  padding: 0 1rem;
  user-select: none;

  &::-webkit-scrollbar {
    display: none;
    width: 0px;
  }
`;

export default SideBarScroll;
