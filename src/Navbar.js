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
    </div>
  );
};

export default Navbar;
