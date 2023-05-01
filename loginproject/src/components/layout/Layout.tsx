import { LayoutContainer } from "./Layout.styles";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/store";

const Layout = () => {
  const selector = useAppSelector((state) => state.login);

  const { isLoggedIn } = selector;

  return (
    <>
      <LayoutContainer isLoggedIn={isLoggedIn}>
        <Sidebar />
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default Layout;
