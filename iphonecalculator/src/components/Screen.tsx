import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: end;
  align-items: end;
`;

const Number = styled.h1`
  color: white;
  font-size: 100px;
  font-weight: 300;
  padding: 0 20px 10px 0;
`;

interface Props {
  calcSum: number;
}
const Screen = ({ calcSum }: Props) => {
  const changeCalcSum = String(calcSum).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Container>
      <Number>{`${changeCalcSum}`}</Number>
    </Container>
  );
};

export default Screen;
