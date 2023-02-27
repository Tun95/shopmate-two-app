import React, { useState } from "react";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";
import "./header.css";
import UserModal from "../../components/modals/UserModal";
import SideBar from "../sidebar/SideBar";

function Header({ cartItems }) {
  return (
    <div>
      <Head />
      {/* <SideBarMenu /> */}
      {/* <SideBar /> */}
      <Search cartItems={cartItems}  />
      <Navbar />
    </div>
  );
}

export default Header;
