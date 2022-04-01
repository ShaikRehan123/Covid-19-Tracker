import React from "react";
import logo from "../images/deaths-large.png";
import { Link } from "react-router-dom";
import { Button } from "antd";
const Navbar = ({ link, nav, font }) => {
  return (
    <div className="navbar sticky-top bg-white border-bottom">
      <div className="container">
        <div className="d-flex align-items-center">
          <img
            className="logo"
            src={logo}
            style={{ width: "55px" }}
            alt="&nbsp;"
          />
          <h5 className="mb-0 font-weight-bold">
            COVID-19 <br />
            <small className="text-muted font-weight-light">Corona Virus</small>
          </h5>
        </div>
        <ul className="navbar-nav flex-row ml-auto">
          <li className="nav-item ml-3">
            <Link className={`${font} nav-link`} to={link}>
              <Button type="dashed">{nav}</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
