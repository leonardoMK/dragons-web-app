import React from 'react';
import styled from 'styled-components';
import { container } from '../../styles/mixins';

const Container = styled.div`
  ${container()}
  ${({ centerContent }) =>
    centerContent
      ? `
    display: flex;
    align-items: center;
    justify-content: center;
  `
      : null}
`;

const PageContainer = ({ children, centerContent = false }) => {
  return <Container centerContent={centerContent}>{children}</Container>;
};

export default PageContainer;
