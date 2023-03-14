import React from "react";
import Slider from "react-slick";
import Ndata from "./Ndata";
import "./styles.css";

function Card() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
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
      <div className="content  product">
        <Slider {...settings}>
          {Ndata.map((item, index) => (
            <div className="box" key={index}>
              <div className="img">
                <img src={item.cover} alt="" />
              </div>
              <h4>{item.name}</h4>
              <span>${item.price}</span>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Card;
