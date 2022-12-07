import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const Container = styled.div`
  ul {
    margin: 10px;
    padding: 10px;
  }
`;

const menuList = [
  { menuName: "Home", path: "/" },
  { menuName: "Portfolio", path: "/portfolio" },
  { menuName: "Info", path: "/info" },
  { menuName: "ETC", path: "/etc" },
];

const Menu = () => {
  return (
    <Container>
      <ul>
        {menuList.map((data) => {
          return (
            <MenuItem
              key={data.menuName}
              menuName={data.menuName}
              path={data.path}
            />
          );
        })}
      </ul>
    </Container>
  );
};

export default Menu;
