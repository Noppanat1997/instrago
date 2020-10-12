import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content">
        <div className="brand">TODONA</div>
        <div className="link-page">
          <p>Todo</p>
          <p>Done</p>
          <p>Contact</p>
        </div>
        <div className="link-create-button">+</div>
      </div>
    </div>
  );
};

export default Navbar;
