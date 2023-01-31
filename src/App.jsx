import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import Navbar from "./layout/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
};

export default App;