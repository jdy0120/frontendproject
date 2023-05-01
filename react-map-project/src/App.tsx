import { useEffect, useRef } from "react";
import "./App.css";
import NaverMap from "./components/NaverMap/NaverMap";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <Container>
      <Sidebar />
      <NaverMap />
    </Container>
  );
}

export default App;
