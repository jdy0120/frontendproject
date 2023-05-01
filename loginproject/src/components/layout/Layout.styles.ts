import styled from "styled-components";
import { css } from "styled-components";

interface LayoutContainerProps {
  isLoggedIn: boolean;
}

export const LayoutContainer = styled.div<LayoutContainerProps>`
  height: 100%;
  display: flex;

  ${({ isLoggedIn }) =>
    !isLoggedIn &&
    css`
      filter: blur(2px);
    `}
`;
