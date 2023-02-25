import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Shopmate.png";
function Search({ cartItems, showUserModal, closeUserModal }) {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", this.window.scrollY > 100);
  });

  return (
    <div>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="search" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>
          <div className="icon f_flex width">
            <div className="user_modal">
              <i className="fa fa-user icon-circle" onClick={showUserModal}></i>
            </div>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{cartItems.length}</span>
              </Link>
            </div>
            <div className="menu_bar">
              <i className="fa-solid fa-menu"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
