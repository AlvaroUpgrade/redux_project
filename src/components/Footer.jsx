import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <img
        className="authorsImage"
        src="./assets/charactersedit.png"
        alt="Authors portrait"
      />
      <p className="pFooter">
        Project made by{" "}
        <a
          href="https://www.linkedin.com/in/edwardmos/"
          target="_blank"
          rel="noreferrer"
        >
          Edward Mosquera
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/carlota-juncosa-b33604119/"
          target="_blank"
          rel="noreferrer"
        >
          Carlota Juncosa
        </a>{" "}
        &{" "}
        <a
          href="https://www.linkedin.com/in/alvaro-ruiz-navarro/"
          target="_blank"
          rel="noreferrer"
        >
          Álvaro Ruiz
        </a>{" "}
        with React.
      </p>
    </footer>
  );
};

export default Footer;
