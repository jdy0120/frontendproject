import React from "react";
import {
  SidebarContainer,
  SidebarList,
  SidebarListItem,
  LogoutContainer,
} from "./Sidebar.styles";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../button/Button";
import { useAppDispatch } from "../../store/store";
import { setLogout } from "../../reducers/loginSlice";
import { useNavigate } from "react-router-dom";

interface Menu {
  title: string;
  path: string;
}

const menus: Menu[] = [
  {
    title: "Main",
    path: "/admin/main",
  },
  {
    title: "PageOne",
    path: "/admin/page-one",
  },
  {
    title: "PageTwo",
    path: "/admin/page-two",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/login");
  };

  return (
    <SidebarContainer>
      <SidebarList>
        {menus.map(({ title, path }) => {
          const isActive = location.pathname === path;

          return (
            <SidebarListItem key={path} isActive={isActive}>
              <Link to={path}>{title}</Link>
            </SidebarListItem>
          );
        })}
      </SidebarList>
      <LogoutContainer>
        <Button text={"Logout"} onClick={handleLogout}></Button>
      </LogoutContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
