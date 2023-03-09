import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaceIcon from "@mui/icons-material/Place";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import CallIcon from "@mui/icons-material/Call";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PeopleIcon from "@mui/icons-material/People";
import BadgeIcon from "@mui/icons-material/Badge";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import SettingsIcon from "@mui/icons-material/Settings";
import logo from "../assets/Shopmate.png";

function SideBar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const userItemList = [
    {
      text: "",
      icon: <img src={logo} alt="logo" style={{ width: "220px" }} />,
      to: "/", // <-- add link targets
    },
    {
      text: "My Profile",
      icon: <AccountCircleIcon style={{ fill: "black" }} />,
      to: "/login", // <-- add link targets
    },
    {
      text: "Wish List",
      icon: <FavoriteIcon style={{ fill: "black" }} />,
      to: "/wish-list",
    },
    {
      text: "Track Orders",
      icon: <PlaceIcon style={{ fill: "black" }} />,
      to: "/track-order",
    },
  ];

  const webItemList = [
    {
      text: "Home",
      icon: <HomeIcon style={{ fill: "black" }} />,
      to: "/", // <-- add link targets
    },
    {
      text: "Store",
      icon: <StoreIcon style={{ fill: "black" }} />,
      to: "/store",
    },
    {
      text: "Contact",
      icon: <CallIcon style={{ fill: "black" }} />,
      to: "/contact",
    },
  ];
  const adminItemList = [
    {
      text: "Dashboard",
      icon: <LineStyleIcon style={{ fill: "black" }} />,
      to: "/admin/dashboard", // <-- add link targets
    },
    {
      text: "Products",
      icon: <Inventory2Icon style={{ fill: "black" }} />,
      to: "/admin/products",
    },
    {
      text: "Users",
      icon: <PeopleIcon style={{ fill: "black" }} />,
      to: "/admin/users",
    },
    {
      text: "Vendors",
      icon: <BadgeIcon style={{ fill: "black" }} />,
      to: "/admin/vendors",
    },
    {
      text: "Orders",
      icon: <WarehouseIcon style={{ fill: "black" }} />,
      to: "/admin/orders",
    },
    {
      text: "Settings",
      icon: <SettingsIcon style={{ fill: "black" }} />,
      to: "/admin/settings",
    },
  ];
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {userItemList.map((item, index) => {
          const { text, icon } = item;
          return (
            <ListItem disablePadding component={Link} to={item.to} key={text}>
              <ListItemButton>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Divider />
      <List>
        {webItemList.map((item, index) => {
          const { text, icon } = item;
          return (
            <ListItem disablePadding component={Link} to={item.to} key={text}>
              <ListItemButton>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Divider />
      <List>
        {adminItemList.map((item, index) => {
          const { text, icon } = item;
          return (
            <ListItem disablePadding component={Link} to={item.to} key={text}>
              <ListItemButton>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className="menu_btn_icon"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon className="menu_icon" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            <span className="side_bar_search p_flex">
              <input
                type="search"
                placeholder="Search..."
                className="side_bar_search_box"
              />
            </span>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SideBar;
