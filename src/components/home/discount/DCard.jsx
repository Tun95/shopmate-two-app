import React from "react";
import Ddata from "./Ddata";
import Slider from "react-slick";

function DCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 6,
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
        breakpoint: 480,
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
        {Ddata.map((item, index) => (
          <div className="box product" key={index}>
            <div className="img">
              <img src={item.cover} alt="" />
            </div>
            <h4>{item.name}</h4>
            <span>${item.price}</span>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default DCard;
