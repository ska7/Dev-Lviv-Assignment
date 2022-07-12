import * as React from "react";
import { useRoutes } from "react-router-dom";

const Router = () => {
  let routes = useRoutes([
    {
      path: "converter",
      element: <h1>Converter</h1>,
    },
    { path: "rates", element: <h1>Rates</h1> },
  ]);

  return routes;
};

export default Router;
