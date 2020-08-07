import React from "react";
import { StateProvider } from "./StateProvider";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Marketplace from "./pages/Marketplace";
import Home from "./pages/Home";

const App = ({ client }) => {
  return (
    <StateProvider>
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
    </StateProvider>
  );
};

export default App;
