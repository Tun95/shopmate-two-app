import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>
          <div className="navlink">
            <ul className="link f_flex capitalize">
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/store">store</Link>
              </li>
              <li>
                <Link to="/user-account">user account</Link>
              </li>
              <li>
                <Link to="/vendor-account">vendor account</Link>
              </li>
              <li>
                <Link to="/track-order">track my order</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
