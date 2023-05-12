import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./styles/Nav.css";

import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={openMenu ? " lists list__open" : "lists list__close"}>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Properties</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Contact</li>
          <li className="cta">Submit Request</li>
        </ul>
        {openMenu ? (
          <IoCloseSharp className="menu__bar" onClick={toggleMenu} />
        ) : (
          <BiMenuAltRight className="menu__bar" onClick={toggleMenu} />
        )}
      </div>
    </nav>
  );
};

export default Nav;
