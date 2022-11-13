import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header>
        <img
          className="computer"
          src="https://66.media.tumblr.com/494b8b577d593865f49a2318955cc3e9/tumblr_mqq8p4VcuE1rfjowdo1_500.gif"
          alt=""
        />
      <div className="headerTextContainer">
        <h1>HELLO HELL!</h1>
      <h2>Movies from devs to devs</h2>
      </div>
    </header>
  );
};

export default Header;
