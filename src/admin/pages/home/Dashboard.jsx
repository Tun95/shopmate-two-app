import React from "react";
import { Helmet } from "react-helmet-async";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import "./styles.scss";

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="home container s_flex">
        <div className="widgets ">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
