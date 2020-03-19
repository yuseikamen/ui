import styled from 'styled-components';

const SideBarAdvancedContainer = styled.details`
  margin-top: 0.5rem;
  min-height: 29rem;
  /* padding: 0 0.75rem; */

  .expanded & {
    width: 100%;
  }

  .collapsed & {
    padding: 0;
    width: 3rem;
  }
`;

const SideBarAdvancedSummary = styled.summary`
  margin-bottom: 0.5rem;
`;

export {
  SideBarAdvancedContainer,
  SideBarAdvancedSummary
};
