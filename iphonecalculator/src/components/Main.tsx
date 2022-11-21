import { useState } from "react";
import styled from "styled-components";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";

const Container = styled.div`
  width: 350px;
  height: 700px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = () => {
  const [calcSum, setCalcSum] = useState(`0`);
  const [operation, setOperation] = useState(``);
  const [prevSum, setPrevSum] = useState(0);

  return (
    <Container>
      <Screen calcSum={calcSum} />
      <ButtonBox
        operation={operation}
        setOperation={setOperation}
        calcSum={calcSum}
        setCalcSum={setCalcSum}
        prevSum={prevSum}
        setPrevSum={setPrevSum}
      />
    </Container>
  );
};

export default Main;
