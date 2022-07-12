import * as React from "react";
import { useRoutes, Navigate } from "react-router-dom";

const AppRouter = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="converter" />,
    },
    {
      path: "converter",
      element: <h1>Converter</h1>,
    },
    { path: "rates", element: <h1>Rates</h1> },
  ]);

  return routes;
};

export default AppRouter;
