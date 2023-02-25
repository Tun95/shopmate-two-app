import React from "react";

function Filter() {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samsung",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
    },
  ];
  return (
    <>
      <div className="category filter">
        <div className="chead d_flex">
          <h1>Filter 0 Items</h1>
          <h1>Store</h1>
        </div>
        {data.map((item, index) => (
          <div className="box f_flex" key={index}>
            <img src={item.cateImg} alt="" />
            <span>{item.cateName}</span>
          </div>
        ))}
        <div className="box box2">
          <button>Clear All</button>
        </div>
      </div>
    </>
  );
}

export default Filter;
