import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";

const Container = styled.div``;

const Box = styled.div``;

function App() {
  const [calc, setCalc] = useState(0);
  const [prevCalc, setPrevCalc] = useState(0);
  return (
    <Container>
      <Box>
        <Screen />
        <ButtonBox prevCalc={prevCalc} setPrevCalc={setPrevCalc} />
      </Box>
    </Container>
  );
}

export default App;
