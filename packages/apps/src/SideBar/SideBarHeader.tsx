import React from 'react';
import styled from 'styled-components';
import { ChainImg } from '@polkadot/react-components';
import { BestNumber, Chain } from '@polkadot/react-query';
import { useTranslation } from '../translate';
import { colors } from '../../../../styled-theming';

interface Props {
  runtimeVersion: any;
  _toggleModal: () => void;
}

const SideBarHeaderContainer = styled.div`
  color: ${colors.N0};
  cursor: pointer;
  display: flex;
  font-size: 12px;
  height: 3rem;
  line-height: 1rem;
  margin: 1rem 0 2rem;
  width: 100%;

  .info {
    margin-left: 0.5rem;
  }

  .collapsed & {
    padding: 0;
    width: 3rem;

    .info {
      display: none;
    }
  }

  img {
    height: 2.75rem;
    width: 2.75rem;
  }
`;

function SideBarHeader ({ _toggleModal, runtimeVersion }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  return (
    <SideBarHeaderContainer
      className='apps--SideBar-logo'
      onClick={_toggleModal('network')}
    >
      <ChainImg />
      <div className='info'>
        <Chain className='chain' />
        {runtimeVersion && (
          <div className='runtimeVersion'>{t('version {{version}}', { replace: { version: runtimeVersion.specVersion.toNumber() } })}</div>
        )}
        <BestNumber label='#' />
      </div>
    </SideBarHeaderContainer>
  );
}

export default SideBarHeader;
