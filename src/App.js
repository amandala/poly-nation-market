import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Marketplace from "./pages/Marketplace";
import Home from "./pages/Home";

const App = ({ client }) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/marketplace">
            <Marketplace client={client} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
