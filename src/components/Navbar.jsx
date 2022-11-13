import React from "react";
import "./Navbar.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ButtonLogout from "./ButtonLogout";

//cuando hago login no aparecen Add Movies ni LogoutButton
//refresh navegador, aparecen los dos componentes logoutbutton y addmovies
//cuando clicko logout, no aparecen login ni register
//refresh navegador, aparecen login y register

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);
  //de donde sacan el user?
  return (
    <nav>
      <NavLink to="" activeclassname={"active"}>
        Movies
      </NavLink>
      {!user && (
        <>
          <NavLink to="login" activeclassname={"active"}>
            Login
          </NavLink>
          <NavLink to="register" activeclassname={"active"}>
            Register
          </NavLink>
        </>
      )}
      {user && (
        <>
          <NavLink to="addmovie" activeclassname={"active"}>
            Add Movies
          </NavLink>
          <ButtonLogout className="logoutButton"/>
        </>
      )}
    </nav>
  );
};

export default Navbar;
