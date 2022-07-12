import * as React from "react";
import CurrencyConverter from "components/currencyConverter/CurrencyConverter";
import Rates from "components/rates/Rates";

const appRoutes = [
  {
    to: "converter",
    label: "Currency Converter",
    element: <CurrencyConverter />,
  },
  {
    to: "rates",
    label: "Rates",
    element: <Rates />,
  },
];

export default appRoutes;
