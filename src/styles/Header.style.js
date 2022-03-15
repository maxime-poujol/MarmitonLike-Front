import styled from 'vue-styled-components';
import color from "@/styles/theme";

export const Nav = styled.nav` {
  padding: 20px;

  display: flex;
  justify-content: center;
  gap: 20px;

  background: ${color.gris};

  > a {
    &:hover {
      text-decoration: underline;
    }
  }
}
    
`;