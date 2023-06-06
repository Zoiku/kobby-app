import "../styles/Menu.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const defaultStyle = {
    fontSize: "inherit",
    color: "inherit",
    textDecoration: "inherit",
  };

  return (
    <div className="MenuComponent">
      <div className="inner_container">
        <ul className="menu_list">
          <li className="menu_list_items">
            <NavLink style={defaultStyle} to="/users">
              Users
            </NavLink>
          </li>

          <li className="menu_list_items">
            <NavLink style={defaultStyle} to="/inventory">
              Inventory
            </NavLink>
          </li>

          <li className="menu_list_items">
            <NavLink style={defaultStyle} to="/reports">
              Reports
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
