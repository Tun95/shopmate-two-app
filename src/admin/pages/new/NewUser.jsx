import React from "react";
import "./new.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { userInputs } from "../../formSource";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

function NewUser() {
  const [file, setFile] = useState();

  return (
    <>
      <Helmet>
        <title>Add New User</title>
      </Helmet>
      <div className="container">
        <div className="userEdit">
          <div className="utop">
            <h1>Add New User</h1>
          </div>
          <div className="ubottom">
            <div className="left">
              <div className="featured">
                <img
                  src={file ? URL.createObjectURL(file) : "/images/noimage.png"}
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <form action="">
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadIcon className="icon" />
                  </label>
                  <input
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                  />
                </div>

                <div className="formInput">
                  <label htmlFor="">First Name</label>
                  <input type="name" placeholder="first name" />
                </div>
                <div className="formInput">
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder="tunji@gmail.com" />
                </div>
                <div className="formInput">
                  <label htmlFor="">Phone</label>
                  <input type="text" placeholder="+1 234 34 5465" />
                </div>
                <div className="formInput">
                  <label htmlFor="">Password</label>
                  <input type="password" />
                </div>
                <div className="formInput">
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder="70 Washington Square," />
                </div>
                <div className="formInput">
                  <label htmlFor="">Country</label>
                  <input type="text" placeholder="USA" />
                </div>
                <div className="formInput formUserType">
                  <input type="checkbox" id="isAdmin" />
                  <label htmlFor="isAdmin">IsAdmin</label>
                  <input type="checkbox" id="isSeller" />
                  <label htmlFor="isSeller">IsSeller</label>
                </div>
                <button>Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewUser;
