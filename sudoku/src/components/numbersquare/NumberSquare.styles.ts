import styled from "styled-components";

interface NumberSquareStyleProps {
  isOpen: boolean;
  borderStyles: string;
}

export const NumberSquareStyle = {
  Container: styled.div<NumberSquareStyleProps>`
    position: relative;
    width: 100px;
    height: 100px;

    ${(props) =>
      props.isOpen
        ? "border: 2px solid #ff0000;"
        : "border: 2px solid #3e3e3e;"}

    ${(props) => props.borderStyles}


    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      border: 2px solid #ff0000;
    }
  `,

  Number: styled.p`
    font-size: 40px;
  `,
};
