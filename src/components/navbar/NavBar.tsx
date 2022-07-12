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
    <NavLink to={to}>{label}</NavLink>
  </li>
);

const NavBar = () => {
  return (
    <div className="navbar-container">
      <ul>
        {appRoutes.map((route) => (
          <NavBarItem to={route.to} label={route.label} />
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default NavBar;
