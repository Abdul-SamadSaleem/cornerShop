import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

const Navbar = () => {
  const themes = useContext(ThemeContext);
  const [theme, setTheme] = useState(themes);

  const toggleTheme = () =>
    theme === themes.light ? setTheme(themes.light) : setTheme(themes.dark);

  return (
    <div className="navbar">
      <img
        src="https://data.whicdn.com/images/66497755/original.gif"
        alt="supreme logo"
        className="navbar__logo"
      />
      <ul className="navbar__list">
        <Link to="/home">
          <li className="navbar__listItem">Home</li>
        </Link>
        <Link to="/shop">
          <li className="navbar__listItem">Shop</li>
        </Link>
        <Link to="/blog">
          <li className="navbar__listItem">Blog</li>
        </Link>
        <Link to="/Basket">
          <li className="navbar__listItem">Basket</li>
        </Link>
      </ul>
      <button onclick={toggleTheme}>CHANGE THEME</button>
    </div>
  );
};

export default Navbar;
