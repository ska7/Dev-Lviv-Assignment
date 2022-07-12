import * as React from "react";
import { NavLink, Outlet } from "react-router-dom";
import appRoutes from "utils/routes";
import "./navBar.less";

interface iNavBarItem {
  to: string;
  label: string;
}

const NavBarItem: React.FC<iNavBarItem> = ({ to, label }) => (
  <li>
    <NavLink to={to} className={({ isActive }) => isActive && "active"}>
      <p>{label}</p>
    </NavLink>
  </li>
);

const NavBar = () => {
  return (
    <div className="navbar-container">
      <ul>
        {appRoutes.map(({ path, label }) => (
          <NavBarItem to={path} label={label} key={label} />
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default NavBar;
