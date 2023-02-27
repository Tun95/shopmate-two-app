import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Shopmate.png";
import SideBar from "../sidebar/SideBar";
import Popover from "@mui/material/Popover";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Search({ cartItems }) {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", this.window.scrollY > 100);
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
              <i
                className="fa fa-user icon-circle"
                aria-describedby={id}
                onClick={handleClick}
              ></i>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                classes={{ paper: "MuiPopover-paper" }}
                PaperProps={{
                  style: {
                    width: "200px",
                  },
                }}
                onAnimationStartCapture
              >
                <Typography sx={{ p: 2 }}>
                  <ul className="user_modal_box ">
                    <Link to="">
                      <li>Profile</li>
                    </Link>
                    <Link to="/wish-list">
                      <li>Wish List</li>
                    </Link>
                    <Divider />
                    <Divider />
                    <Link to="/admin/dashboard">
                      <li>Dashboard</li>
                    </Link>
                    <Link to="/admin/products">
                      {" "}
                      <li>Products</li>
                    </Link>
                    <Link to="/admin/users">
                      <li>Users</li>
                    </Link>
                    <Link to="/admin/vendors">
                      <li>Vendors</li>
                    </Link>
                    <Link to="/admin/orders">
                      <li>Orders</li>
                    </Link>
                    <Link to="/admin/settings">
                      <li>Settings</li>
                    </Link>
                  </ul>
                </Typography>
              </Popover>
            </div>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{cartItems.length}</span>
              </Link>
            </div>
            <div className="menu_bar">
              <i className="fa-solid fa-menu">
                {" "}
                <SideBar />
              </i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
