import styled from 'vue-styled-components';
import color from '@/styles/theme'

export const Section = styled.section`
  margin: 60px 30vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  background: ${color.white};
  border-radius: 15px;
  box-shadow: 5px 5px 15px;
`;

export const RecipeTitle = styled.div`
  text-align: center;

  > h1 {
    font-size: 30px;
  }
`;

export const RecipeImage = styled.img`
  display: block;
  object-fit: cover;
  border-radius: 24px;
`;

export const SectionTitle = styled.div`
  padding: 20px;

  text-align: center;
  box-shadow: 5px 5px 15px;
  border-radius: 15px;

  > h2 {
    font-size: 20px;
    color: ${color.red}
  }
`

export const IngredientSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const Ingredient = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  gap: 30%;
`;

export const TimesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  justify-items: center;
  row-gap: 20px;

  > p {
    &:first-of-type {
      grid-column: 1 / span 3;
    }
  }
`;

export const StepSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  
  > div > p {
    margin-top: 10px;
    margin-left: 15px;
  }
`;

