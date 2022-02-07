import styled from 'vue-styled-components';
import color from "@/styles/theme";

export const LoginContainer = styled.article`
  padding: 17%;
  width: 30%;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.h2`
  font-size: 30px;
  color: ${color.red}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Field = styled.input`
  padding: 20px;
  z-index: 0;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: ${color.red};
    z-index: 3;
  }
  
  &:first-of-type {
    border-radius: 5px 5px 0 0;
  }

  &:last-of-type {
    margin-top: -1px;
    border-radius: 0 0 5px 5px;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Submit = styled.input`
  padding: 15px;
  color: #fff;
  background: ${color.red};
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;