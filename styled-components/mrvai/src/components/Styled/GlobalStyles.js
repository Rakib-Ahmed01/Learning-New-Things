import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,*::after,*::before{
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    font-family: inherit;
  }
  body{
    background-color: ${({ theme }) =>
      theme.mode === 'dark' ? theme.colors.veryDarkBlue : theme.colors.white};
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
    padding: 0 1rem;
    font-family: 'Overpass', sans-serif;
    box-sizing: border-box;
  }
`;
