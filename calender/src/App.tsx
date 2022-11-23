import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
