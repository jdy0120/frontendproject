import React from "react";
import styled from "styled-components";

const Container = styled.div<Props>`
  border-left: 3px solid
    ${(props) => (props.active ? props.theme.activeMenu : "transparent")};
  width: 100%;
  padding: 0.3rem;
  padding-left: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.span<Props>`
  color: ${(props) => (props.active ? props.theme.activeMenu : "#aaa5a5")};
  font-size: 1.1rem;
  margin-right: 1rem;
`;

const Title = styled.h1<Props>`
  color: ${(props) => (props.active ? props.theme.activeMenu : "#aaa5a5")};
  font-size: 0.9rem;
  font-weight: 300;
`;

interface Props {
  title: string;
  icon: string;
  active?: boolean;
}

const MenuItem = (props: Props) => {
  return (
    <Container {...props}>
      <Icon
        {...props}
        className="iconify"
        data-inline="false"
        data-icon={`mdi-light:${props.icon}`}
      ></Icon>
      <Title {...props}>{props.title}</Title>
    </Container>
  );
};

export default MenuItem;
