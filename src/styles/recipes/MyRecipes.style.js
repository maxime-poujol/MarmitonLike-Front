import styled from 'vue-styled-components';

export const Section = styled.section`
  padding-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;


export const Tableau = styled.table`
    border-collapse: collapse;
`;

export const Row = styled.tr`
  border-bottom: 2px solid black  
  
> td,th{
  padding: 10px;
  text-align: center;
}
`;

const color = {color}

export const Button = styled('button', color)`
  padding: 15px 10px;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.color};
  cursor: pointer;
`;