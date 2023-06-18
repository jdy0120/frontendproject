import styled from "styled-components";

export const ChoseNumberStyle = {
  Container: styled.div`
    position: absolute;
    top: 105px;
    left: 0;

    display: flex;
    z-index: 10;

    background-color: #ffffff;
  `,

  NumberBox: styled.div`
    width: 50px;
    height: 50px;
    border: 2px solid #3e3e3e;

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Number: styled.p``,
};
