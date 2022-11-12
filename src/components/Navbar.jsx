import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import ButtonLogout from "./ButtonLogout";
import {useSelector} from 'react-redux';

const Navbar = () => {
  const {user, token} = useSelector(state=>state.auth)
  return (
    <nav>
      <NavLink to="" activeclassname={"active"}>
        Movies
      </NavLink>
    {/*   <NavLink to="moviesdetails" activeclassname={"active"}>
        Movies
      </NavLink> */}
      {!user &&
      <>
      <NavLink to="login" activeclassname={"active"}>
        Login
      </NavLink>
      <NavLink to="register" activeclassname={"active"}>
        Register
      </NavLink>
      </>
      }
      {
        user &&
        <>
        <NavLink to="/" activeclassname={"active"}>Movies</NavLink>
        <NavLink to="addmovies" activeclassname={"active"}>Add Movies</NavLink>
      <ButtonLogout/>
        </>
      }
      
    </nav>
  );
};

export default Navbar;
