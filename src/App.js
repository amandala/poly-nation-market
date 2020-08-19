import React from "react";
import { StateProvider } from "./StateProvider";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Marketplace from "./pages/Marketplace";
import Home from "./pages/Home";
import LiveArt from "./pages/LiveArt";

const App = ({ client }) => {
  return (
    <StateProvider>
      <Router>
        <div style={{ minHeight: "100vh" }}>
          <Nav client={client} />
          <Switch>
            <Route path="/market">
              <Marketplace client={client} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/liveart">
              <LiveArt />
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
