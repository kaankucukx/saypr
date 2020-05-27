import styled from 'styled-components';
import Button from 'antd/es/button';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  justify-content: space-between;
`;
export const WebsiteInputContainer = styled.div`
   display: flex;
   flex-flow: column nowrap;
`;
export const WebsiteInputInnerContainer = styled.div`
   display: flex;
   justify-content: space-between;
`;
export const WebsiteHeader = styled.p`
   font-size: 22px;
   font-weight: bold;
   color: white;
   margin: 0;
`;
export const RemoveButton = styled(Button)`
    background-color: red;
    color: white;
    font-size: 22px;
    font-weight: bold;
    border: 0;
    height: auto;
    max-height: 60px;
    &:hover {
      background-color: darkred;
    }
`;
export const ButtonsContainer = styled('div')`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 40px;
  margin-top: 20px;
`;
