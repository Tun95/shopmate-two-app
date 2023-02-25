import React from "react";
import "./styles.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const columns = [
  { field: "seller", headerName: "Seller", width: 170 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <>
          <div className="cellWidthImg">
            <img src={params.row.img} alt="" className="cellImg" />
            {params.row.name}
          </div>
        </>
      );
    },
  },
  { field: "category", headerName: "Category", width: 230 },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    renderCell: (params) => {
      return (
        <>
          <div className={`cellWithPrice ${params.row.price}`}>
            {params.row.price}
          </div>
        </>
      );
    },
  },
  {
    field: "date",
    headerName: "Date",
    width: 160,
    renderCell: (params) => {
      return (
        <>
          <div className={`cellWithStatus ${params.row.date}`}>
            {params.row.date}
          </div>
        </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    seller: "SHOPMATE",
    name: "Haruku Dress",
    img: "/images/shops/shops-9.png",
    category: "cloth",
    date: "18 Feb 2023",
    price: "$35",
  },
  {
    id: 2,
    seller: "SHOPMATE",
    name: "Eye Piece",

    img: "/images/shops/shops-9.png",
    category: "airpods",
    date: "18 Feb 2023",
    price: "$25",
  },
  {
    id: 3,
    seller: "SHOPMATE",
    name: "Kid's Short",

    img: "/images/shops/shops-9.png",
    category: "cloth",
    date: "18 Feb 2023",
    price: "$35",
  },
  {
    id: 4,
    seller: "SHOPMATE",
    name: "BT",

    img: "/images/shops/shops-9.png",
    category: "airpods",
    date: "18 Feb 2023",
    price: "$35",
  },
  {
    id: 5,
    seller: "SHOPMATE",
    name: "Tecno",

    img: "/images/shops/shops-9.png",
    category: "phone",
    date: "18 Feb 2023",
    price: "$35",
  },
  {
    id: 6,
    seller: "SHOPMATE",
    name: "T-Short",

    img: "/images/shops/shops-9.png",
    category: "cloth",
    date: "18 Feb 2023",
    price: "$35",
  },
  {
    id: 7,
    seller: "SHOPMATE",
    name: "Clifford",

    img: "/images/shops/shops-9.png",
    category: "phone",
    date: "18 Feb 2023",
    price: "$35",
  },
  {
    id: 8,
    seller: "SHOPMATE",
    name: "Wrist Watch",

    img: "/images/shops/shops-9.png",
    category: "watch",
    date: "18 Feb 2023",
    price: "$35",
  },
  {
    id: 9,
    seller: "SHOPMATE",
    name: "Eye glass",

    img: "/images/shops/shops-9.png",
    category: "glass",
    date: "18 Feb 2023",
    price: "$35",
  },
];
function ProductList() {
  const navigate = useNavigate();
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/admin/product/78578" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <Helmet>
        <title>All Products</title>
      </Helmet>
      <div className="container">
        <div className="datatable mtb">
          <span className="c_flex">
            <h2>All Products</h2>
            <i
              onClick={() => {
                navigate(`/admin/product/new`);
              }}
              className="fa-solid fa-square-plus filterPlus"
            ></i>
          </span>
          <DataGrid
            className="datagrid"
            rows={rows}
            columns={columns.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}

export default ProductList;
