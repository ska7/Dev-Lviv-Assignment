import CurrencyMenu from "components/currenciesMenu/CurrencyMenu";
import NavBar from "components/navbar/NavBar";
import * as React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <header className="app-header">
      <CurrencyMenu />
      <NavBar />
      <Outlet />
    </header>
  );
};

export default AppLayout;
