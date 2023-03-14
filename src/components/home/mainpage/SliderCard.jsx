import React from "react";
import Sliderdata from "./Sliserdata.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SliderCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <>
      <Slider {...settings} className="slick-slider">
        {Sliderdata.map((item, index) => (
          <div key={index} className="box d_flex top ">
            <div className="left">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button className="btn-primary">Visit Collections</button>
            </div>
            <div className="right">
              <img src={item.cover} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default SliderCard;
