import "./styles/layout.scss";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";
import MuiSnackbar from "./components/Snackbar";

const Layout = () => {
  return (
    <div className="LayoutComponent">
      <div className="inner_container">
        <Menu />

        <div className="main_dashboard_work_space_container">
          <div className="main_dashboard_work_space">
            <MuiSnackbar />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
