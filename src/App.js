import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Shop from "./Shop";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/basket">
          <Navbar />
        </Route>
        <Route path="/blog">
          <Navbar />
        </Route>
        <Route path="/shop">
          <Navbar />
          <Shop />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
