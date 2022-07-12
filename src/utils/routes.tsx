import * as React from "react";
import CurrencyConverter from "components/currencyConverter/CurrencyConverter";
import ExchangeRates from "components/exchangeRates/ExchangeRates";
import { RouteObject } from "react-router-dom";

const appRoutes = [
  {
    path: "converter",
    label: "Currency Converter",
    element: <CurrencyConverter />,
  },
  {
    path: "rates",
    label: "Rates",
    element: <ExchangeRates />,
  },
];

export default appRoutes;
