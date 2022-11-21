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
  const [calcSum, setCalcSum] = useState(1234);
  const [operation, setOperation] = useState(``);

  return (
    <Container>
      <Screen calcSum={calcSum} />
      <ButtonBox
        operation={operation}
        setOperation={setOperation}
        calcSum={calcSum}
        setCalcSum={setCalcSum}
      />
    </Container>
  );
};

export default Main;
