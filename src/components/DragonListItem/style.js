import styled from 'styled-components';

export const Item = styled.li`
  padding: 20px;
  border-left: 4px solid #3f51b5;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  &:hover {
    box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.1)
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DragonName = styled.p`
  display: flex;
  align-items: center;
`;

export const DragonType = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 5px;
`;

export const LeftInfo = styled.div`
display: flex;
align-items: center;
`;

export const Actions = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-right: 10px;
  svg:first-child {
    margin-bottom: 5px;  
  }
`;