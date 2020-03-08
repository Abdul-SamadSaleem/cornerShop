import React from "react";

export const themes = {
  dark: {
    color: "white",
    background: "black",
    height: "100%"
  },
  light: {
    color: "black",
    background: "white",
    height: "100%"
  }
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
