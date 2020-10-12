import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content">
        <div className="brand">TODONA</div>
        <div className="link-page">
          <Link to="/">Todo</Link>
          <Link to="/done">Done</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button className="create-button">New Task</button>
      </div>
    </div>
  );
};

export default Navbar;
