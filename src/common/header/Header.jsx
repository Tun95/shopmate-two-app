import React, { useState } from "react";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";
import "./header.css";
import SideBar from "../sidebar/SideBar";
import UserModal from "../../components/modals/UserModal";

function Header({ cartItems }) {
  //OPENING USER MODAL
  const [openUserModal, isOpenUserModal] = useState(false);
  const closeUserModal = () => {
    isOpenUserModal(false);
    document.body.style.overflow = "unset";
  };
  const showUserModal = () => {
    isOpenUserModal(true);
    // if (typeof window !== "undefined" && window.document) {
    //   document.body.style.overflow = "hidden";
    // }
  };
  return (
    <div>
      <Head />
      <SideBar />
      <Search cartItems={cartItems} showUserModal={showUserModal} />
      <UserModal
        openUserModal={openUserModal}
        closeUserModal={closeUserModal}
      />
      <Navbar />
    </div>
  );
}

export default Header;
