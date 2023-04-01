import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Shopmate.png";
import SideBar from "../sidebar/SideBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    with: "520px",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "15px",
      // margin: "0px 15px",
    },
    "& .MuiMenuItem-root": {
      margin: "5px 0px",
      color: "#2e2e2e",
      padding: "5px 60px",
      fontWeight: "500",
      transition: "all 500ms ease",
      "& .MuiSvgIcon-root": {
        fontSize: 16,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
function Search({ cartItems }) {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", this.window.scrollY > 100);
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <i className="fa fa-user icon-circle" onClick={handleClick}></i>

              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  component={Link}
                  to="/profile"
                  onClick={handleClose}
                  disableRipple
                >
                  Profile
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/wish-list"
                  onClick={handleClose}
                  disableRipple
                >
                  Wish List
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/admin/dashboard"
                  onClick={handleClose}
                  disableRipple
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/admin/products"
                  onClick={handleClose}
                  disableRipple
                >
                  Products
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/admin/users"
                  onClick={handleClose}
                  disableRipple
                >
                  Users
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/admin/vendors"
                  onClick={handleClose}
                  disableRipple
                >
                  Vendors
                </MenuItem>{" "}
                <MenuItem
                  component={Link}
                  to="/admin/orders"
                  onClick={handleClose}
                  disableRipple
                >
                  Orders
                </MenuItem>{" "}
                <MenuItem
                  component={Link}
                  to="/admin/settings"
                  onClick={handleClose}
                  disableRipple
                >
                  Settings
                </MenuItem>
              </StyledMenu>
              {/* <Popover
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
              </Popover> */}
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
