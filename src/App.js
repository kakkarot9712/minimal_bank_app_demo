import React from "react";
import "./App.css";
import CurrentBalance from "./Components/Dashboard/CurrentBalance";
import Dashboard from "./Components/Dashboard/Dashboard";
import Summary from "./Components/Dashboard/Summary";
import MainHeader from "./Components/Header/MainHeader";

function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <CurrentBalance />
        <Dashboard />
        <Summary />
      </main>
    </React.Fragment>
  );
}

export default App;
