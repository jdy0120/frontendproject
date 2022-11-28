import React from "react";
import { useThemeContext } from "../../context/themeContext";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
`;

const Switch = () => {
  const { toggleTheme } = useThemeContext();
  return (
    <Container>
      <button onClick={toggleTheme}>{`스위치`}</button>
    </Container>
  );
};

export default Switch;
