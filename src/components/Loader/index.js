import React from 'react'; 
import CircularProgress from '@material-ui/core/CircularProgress';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${({ fixed }) => fixed ? css`
    position: fixed;
    top: 64px;
    left: 0;
    background-color: rgba(255, 255, 255, 0.5);
  ` : null}
`;

const Loader = ({ fixed }) => {
  return (
    <Container fixed={fixed}>
      <CircularProgress />
    </Container>
  );
}
 
export default Loader;