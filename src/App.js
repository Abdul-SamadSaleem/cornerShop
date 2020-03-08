import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Shop from "./Shop";
import Blog from "./Blog";
import Basket from "./Basket";
import ThemeContext, { themes } from "./ThemeContext";

const App = () => {
  const themes = useContext(ThemeContext);

  return (
    <div style={themes}>
      <ThemeContext.Provider value={themes.light}>
        <Router>
          <Switch>
            <Route path="/basket">
              <Navbar />
              <Basket />
            </Route>
            <Route path="/blog">
              <Navbar />
              <Blog />
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
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
