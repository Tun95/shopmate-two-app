import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
    marginTop: theme.spacing(3),
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
function Navbar() {
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
      <header className="header">
        <div className="container d_flex">
          <div className="categories ctg_btn">
            <div className="d_flex ctg_btn" onClick={handleClick}>
              <span className="fa-solid fa-border-all"></span>
              <h4>
                Categories <i className="fa fa-chevron-down"></i>
              </h4>
            </div>
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
                to=""
                onClick={handleClose}
                disableRipple
              >
                Fashion
              </MenuItem>
              <MenuItem
                component={Link}
                to=""
                onClick={handleClose}
                disableRipple
              >
                Electronic
              </MenuItem>
              <MenuItem
                component={Link}
                to="/profile"
                onClick={handleClose}
                disableRipple
              >
                Cars
              </MenuItem>
              <MenuItem
                component={Link}
                to=""
                onClick={handleClose}
                disableRipple
              >
                Home & Garden
              </MenuItem>
              <MenuItem
                component={Link}
                to=""
                onClick={handleClose}
                disableRipple
              >
                Gifts
              </MenuItem>
              <MenuItem
                component={Link}
                to=""
                onClick={handleClose}
                disableRipple
              >
                Health & Beauty
              </MenuItem>{" "}
              <MenuItem
                component={Link}
                to=""
                onClick={handleClose}
                disableRipple
              >
                Pets
              </MenuItem>{" "}
              <MenuItem
                component={Link}
                to=""
                onClick={handleClose}
                disableRipple
              >
                Baby Toys
              </MenuItem>
              <MenuItem
                component={Link}
                to=""
                onClick={handleClose}
                disableRipple
              >
                Groceries
              </MenuItem>
              <MenuItem
                component={Link}
                to=""
                onClick={handleClose}
                disableRipple
              >
                Books
              </MenuItem>
            </StyledMenu>
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
