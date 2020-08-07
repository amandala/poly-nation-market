import React from "react";
import { StateProvider } from "./StateProvider";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Marketplace from "./pages/Marketplace";
import Home from "./pages/Home";

const App = ({ client }) => {
  return (
    <StateProvider>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/market">
              <Marketplace client={client} />
            </Route>
            <Route path="/about">
              <About />
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
