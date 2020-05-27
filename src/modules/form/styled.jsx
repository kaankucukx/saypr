import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background: #333333;
  border-radius: 12px;
  filter: drop-shadow(10px 8px 18px #4444dd);
  padding: 70px;
   form {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 40px;
    grid-row-gap: 16px;
    margin-top: 30px;
  }
  
  .ant-steps-item-finish .ant-steps-item-icon { // Overwrite default
  background-color: #018DAA;
  border-color: #018dab;
}
`;

export const MainHeading = styled.h1`
  font-size: 5vw;
  color: white;
  font-weight: 700;
`;
export const SubHeading = styled.h3`
  font-size: 3vw;
  color: #bbbbbb;
`;

