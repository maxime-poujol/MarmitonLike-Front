import styled from 'vue-styled-components';
import color from "@/styles/theme";

export const RecepiesListContainer = styled.section`
  padding-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, fit-content(100%));
  justify-content: center;
  gap: 20px;
`

export const RecipeContainer = styled.article`
  height: 300px;
  width: 250px;

  display: flex;
  align-items: flex-end;

  background-image: url("https://via.placeholder.com/250x300");
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: 5px 5px 15px #000;
`;

export const TitleContainer = styled.div`
  width: 100%;
  padding: 10px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${color.white};
  border-radius: 15px;
`;

export const RecipeName = styled.h2`
  font-size: 20px;
  color: ${color.red}
`;