import styled from 'styled-components';

const SideBarAdvancedContainer = styled.details`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0 0.75rem;

  .collapsed & {
    padding: 0;
  }
`;

const SideBarAdvancedSummary = styled.summary`
  margin-bottom: 0.5rem;
`;

export {
  SideBarAdvancedContainer,
  SideBarAdvancedSummary
};
