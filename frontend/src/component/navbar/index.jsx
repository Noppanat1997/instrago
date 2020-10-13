import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [mode, setMode] = useState(0)

  useState(() => {
    setMode(window.location.pathname)
  }, [])

  return (
    <div className="navbar">
      <div className="content">
        <div className="brand"><i className="fab fa-xing" style={{fontSize: "22px"}}></i> TODONA</div>
        <div className="link-page">
          <Link to="/" onClick={() => setMode(0)} style={mode === "/" ? { color: "#009BFF" } : null}>Todo</Link>
          <Link to="/done" onClick={() => setMode(1)} style={mode === "/done" ? { color: "#009BFF" } : null}>Done</Link>
          <Link to="/contact" onClick={() => setMode(2)} style={mode === "/contact" ? { color: "#009BFF" } : null}>Contact</Link>
        </div>
        <Link to="/create"><button className="create-button">New Task</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
