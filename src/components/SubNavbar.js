import React from "react";
import { myLogo } from "../ressources";
import { Link } from "react-router-dom";

export default function SubNavbar() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          HOME
        </Link>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#shop">
          SHOP
        </a>
      </li>

      <li className="nav-item MyLogo">
        <img
          src={myLogo}
          className="navbar-brand"
          width={"90px"}
          height={"120px"}
          alt="mylogo"
        />
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#what-we-offers">
          WHAT WE OFFER
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#contact">
          CONTACT
        </a>
      </li>
    </ul>
  );
}
