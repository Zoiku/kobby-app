import "./styles/layout.scss";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="LayoutComponent">
      <div className="inner_container">
        <div>
          <Menu />
        </div>

        <div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
