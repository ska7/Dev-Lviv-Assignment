import * as React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import NavBar from "./navbar/NavBar";

const AppRouter = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <NavBar />,
      children: [
        {
          path: "converter",
          element: <h1>Converter</h1>,
        },
        { path: "rates", element: <h1>Rates</h1> },
      ],
    },
  ]);

  return routes;
};

export default AppRouter;
