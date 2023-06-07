import "../styles/Menu.scss";
import AccountProfileMenu from "./AccountProfileMenu";
import {
  GroupsRounded,
  Inventory2Rounded,
  BarChartRounded,
} from "@mui/icons-material/";
import { NavLink } from "react-router-dom";


const Menu = () => {
  return (
    <div className="MenuComponent">
      <div className="menu_component_inner_container">
        <div className="account_profile_menu">
          <AccountProfileMenu />
          <div>User</div>
        </div>

        <div className="menu_list_container">
          <div className="menu_list">
            <div className="menu_items_container">
              <NavLink className="menu_items" to="/inventory">
                <div className="menu_item_icons_container">
                  <Inventory2Rounded className="menu_item_icons" />
                </div>
                <div className="menu_title">Inventory</div>
              </NavLink>
            </div>
            <div className="menu_items_container">
              <NavLink className="menu_items" to="/reports">
                <div className="menu_item_icons_container">
                  <BarChartRounded className="menu_item_icons" />
                </div>
                <div className="menu_title">Reports</div>
              </NavLink>
            </div>
            <div className="menu_items_container">
              <NavLink className="menu_items" to="/users">
                <div className="menu_item_icons_container">
                  <GroupsRounded className="menu_item_icons" />
                </div>
                <div className="menu_title">Users</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
