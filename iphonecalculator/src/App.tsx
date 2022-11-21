import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Main from "./components/Main";

const Container = styled.div`
  width: 100%;
  height: 100vh;
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
