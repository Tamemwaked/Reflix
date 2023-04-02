import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar-container">
      <Link to={"/"} className="navbar-link">
        <p className="navbar-logo">Reflix</p>
      </Link>
      <Link to={"/"} className="navbar-link">
        <p className="navbar-text">home</p>
      </Link>
      <Link to={"/catalog"} className="navbar-link">
        <p className="navbar-text">catalog</p>
      </Link>
    </div>
  );
}
