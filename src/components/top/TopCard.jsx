import React from "react";
import Tdata from "./Tdata";
import Slider from "react-slick";
import "./styles.css";

function TopCard() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((item, index) => (
          <div className="box product" key={index}>
            <div className="nametop d_flex">
              <span className="tleft">{item.name}</span>
              <span className="tright">{item.desc}</span>
            </div>
            <div className="img">
              <img src={item.cover} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default TopCard;
