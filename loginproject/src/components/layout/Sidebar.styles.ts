import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 200px;
  height: 100%;

  background-color: #f5f5f5;
`;

export const SidebarList = styled.ul``;

interface SidebarListProps {
  isActive: boolean;
}

export const SidebarListItem = styled.li<SidebarListProps>`
  background-color: ${(props) =>
    props.isActive ? "#e0e0e0" : "#f5f5f5"};

  a {
    text-decoration: none;
    color: black;
  }
`;

export const LogoutContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
