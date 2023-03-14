import React from "react";
import "./styles.css";

function Annct() {
  return (
    <>
      <section className="annocument background">
        <div className="container d_flex display_grid">
          <div className="img img-1">
            <img
              src="./images/banner-1.png"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
          <div className="img img-2">
            <img
              src="./images/banner-2.png"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Annct;
