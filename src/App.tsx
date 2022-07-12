import * as React from "react";
import Router from "./components/routes";

const App = () => {
  console.log(process.env.NODE_ENV);
  return <Router />;
};

export default App;
