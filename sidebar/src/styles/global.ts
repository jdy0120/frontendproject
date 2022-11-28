import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    padding: 0;
    font-family: 'Roboto',sans-serif;
    transition: all 0.25 line-break;
  }
`;
