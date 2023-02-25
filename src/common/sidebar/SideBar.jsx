import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function SideBar() {
  return (
    <>
      {/* <div className="side-bar">
        <div className="side-bar-box">
          <ul className="side_bar_list">
            <span className="bar_link">
              <li>BAR</li>
            </span>
            <Link to="" className="bar_list">
              <li>My Profile</li>
            </Link>
            <Link to="" className="bar_list">
              <li>Wish List</li>
            </Link>
            <Link to="" className="bar_list">
              <li>My Profile</li>
            </Link>
            <hr />
            <hr />
            <Link to="/" className="bar_list">
              <li>Home</li>
            </Link>
            <Link to="/store" className="bar_list">
              <li>Store</li>
            </Link>
            <Link to="" className="bar_list">
              <li>User Account</li>
            </Link>
            <Link to="" className="bar_list">
              <li>Vendor Account</li>
            </Link>
            <Link to="/track-order" className="bar_list">
              <li>Track My Order</li>
            </Link>
            <Link to="/contact" className="bar_list">
              <li>Contact</li>
            </Link>
            <hr />
            <hr />
            <Link to="/admin/dashboard" className="bar_list">
              <li>Dashboard</li>
            </Link>
            <Link to="/admin/products" className="bar_list">
              <li>Products</li>
            </Link>
            <Link to="/admin/users" className="bar_list">
              <li>Users</li>
            </Link>
            <Link to="/admin/vendors" className="bar_list">
              <li>Vendors</li>
            </Link>
            <Link to="/admin/orders" className="bar_list">
              <li>Orders</li>
            </Link>
            <Link to="/admin/settings" className="bar_list">
              <li>Settings</li>
            </Link>
            <span className="bar_link bar_link_bottom">
              <li>BAR</li>
            </span>
          </ul>
        </div>
      </div> */}
    </>
  );
}

export default SideBar;
