import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="https://data.whicdn.com/images/66497755/original.gif"
        alt="supreme logo"
        className="navbar__logo"
      />
      <ul className="navbar__list">
        <li className="navbar__listItem">
          <Link to="/home">Home</Link>
        </li>
        <li className="navbar__listItem">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="navbar__listItem">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="navbar__listItem">
          <Link to="/Basket">Basket</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
