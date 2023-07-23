import React from "react";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Explorer from "./components/Explorer/Explorer";

const App = () => {
  return (
    <>
      <Header />
      <Filters />
      <Explorer />
    </>
  );
};

export default App;
