import ExchangeRates from "components/exchangeRates/ExchangeRates";
import CurrencyConverter from "components/currencyConverter/CurrencyConverter";
import * as React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AppHeader from "components/appHeader/AppHeader";

const AppRouter = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <AppHeader />,
      children: [
        {
          path: "/",
          element: <Navigate to="converter" />,
        },
        {
          path: "converter",
          element: <CurrencyConverter />,
        },
        { path: "rates", element: <ExchangeRates /> },
      ],
    },
  ]);

  return routes;
};

export default AppRouter;
