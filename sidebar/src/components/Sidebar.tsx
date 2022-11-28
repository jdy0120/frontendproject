import React from "react";
import styled from "styled-components";
import Menu from "./Sidebar/Menu";
import Switch from "./Sidebar/Switch";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const NavBar = styled.div`
  width: 300px;
  height: 100%;
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

interface Props {
  children: JSX.Element;
}

const Sidebar = ({ children }: Props) => {
  return (
    <Container>
      <Switch />
      <NavBar>
        <Menu />
      </NavBar>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default Sidebar;
