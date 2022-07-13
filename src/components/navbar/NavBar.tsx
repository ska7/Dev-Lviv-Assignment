import * as React from "react";
import { NavLink } from "react-router-dom";
import navRoutes from "utils/navRoutes";
import "./navBar.less";

interface iNavBarItem {
  to: string;
  label: string;
}

const NavBarItem: React.FC<iNavBarItem> = ({ to, label }) => (
  <li>
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
      <p>{label}</p>
    </NavLink>
  </li>
);

const NavBar = () => {
  return (
    <nav>
      <ul className="navbar-container">
        {navRoutes.map(({ path, label }) => (
          <NavBarItem to={path} label={label} key={label} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
