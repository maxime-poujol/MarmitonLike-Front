import styled from 'vue-styled-components';

export const FormContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  > form > div > input {
    margin-top: 20px;
  }
`

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const IngredientRow = styled.div`
  
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 20px;
      > input {
        margin-top: 10px;
        &:first-of-type {
          width: 50%;
        }
        width: 10%;
        padding: 10px;
      }
`

export const PlusContainer = styled.div`
    width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const color = {color}

export const Button = styled('button', color)`
  height: 50%;
  padding: 10px;
  margin-top: 5px;
  border: none;
    background: ${props => props.color};
  cursor: pointer
`;

export const StepArea = styled.textarea`
    margin-top: 20px;
  padding: 10px;
`;