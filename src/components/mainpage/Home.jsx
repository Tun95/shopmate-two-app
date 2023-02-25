import React from "react";
import Categories from "./Categories";
import "./home.css";
import Slider from "./Slider";


function Home() {
  return (
    <>
      <section className="home">
        <div className="container d_flex display_grid">
          <Categories />
          <Slider />
        </div>
      </section>
    </>
  );
}

export default Home;
