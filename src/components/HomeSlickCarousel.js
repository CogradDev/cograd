import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSlickCarousel.scss";
import c1 from "../assets/c1.webp";
import c2 from "../assets/c2.webp";
import c3 from "../assets/c3.webp";
import c4 from "../assets/c4.webp";
import c5 from "../assets/c5.webp";
import c6 from "../assets/c6.webp";

const carouselItems = [
  { id: 1, src: c1, alt: "Item 1" },
  { id: 2, src: c2, alt: "Item 2" },
  { id: 3, src: c3, alt: "Item 3" },
  { id: 4, src: c4, alt: "Item 4" },
  { id: 5, src: c5, alt: "Item 5" },
  { id: 6, src: c6, alt: "Item 6" },
];

const HomeSlickCarousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="half-circle-container">
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlickCarousel;
