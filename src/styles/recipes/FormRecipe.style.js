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
  
    > div {
      display: flex;
      gap: 20px;
      
      > input {
        margin-top: 1px;
        &:first-of-type {
          width: 50%;
        }
        width: 10%;
        padding: 10px;
      }
    }
`