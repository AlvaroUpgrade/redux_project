import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      Navbar
      <NavLink to="movies" activeclassname={"active"}>
        Movies
      </NavLink>
      <NavLink to="login" activeclassname={"active"}>
        Login
      </NavLink>
      <NavLink to="register" activeclassname={"active"}>
        Register
      </NavLink>
    </div>
  );
};

export default Navbar;
