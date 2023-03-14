import React from "react";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { Link } from "react-router-dom";
import "./styles.scss";

function UserInfo() {
  return (
    <div className="container">
      <div className="utop ">
        <div className="left">
          <div className="editButton">
            <Link to={`/admin/user/76765/edit`}>Edit</Link>
          </div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwugjq9eaZxWJMh33lE8JNnwjeTfxuc-4yNRlYdA1CgFHRUDEbRFIrWaAZgaJ5Yd2zVQ&usqp=CAU"
              alt=""
              className="itemImg"
            />
            <div className="details">
              <h1 className="itemTitle">Jane Don</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">janedoe@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+1 234 345 6345</span>
              </div>{" "}
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">New York, NY 10012</span>
              </div>{" "}
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue"> United States</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <List />
      </div>
    </div>
  );
}

export default UserInfo;
