import React from "react";
import "./style.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg mt-3">
      <NavLink className="navbar-brand" to="/" style={{ color: props.color }}>
        Renewables & Technologies
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <FaBars color="white" />
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav  ml-auto">
          <NavLink className="nav-item nav-link mr-5" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link mr-5" to="/goodwe">
            GoodWe
          </NavLink>
          {/* <NavLink className="nav-item nav-link mr-5" to="/products">
            Products
          </NavLink> */}
          <NavLink className="nav-item nav-link mr-5" to="/services">
            Services
          </NavLink>
          <NavLink className="nav-item nav-link mr-5" to="/about">
            About
          </NavLink>
          <NavLink className="nav-item nav-link mr-5" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
