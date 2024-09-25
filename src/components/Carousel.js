import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Assuming you have your CSS styles here
import innerMiddle from "../assets/middle.webp";
import innerLeft from "../assets/inner-left.webp";
import innerRight from "../assets/inner-right.webp";
import Ai from "./Ai";

const slides = [
  {
    id: 1,
    number: "10%",
    text: "Only 10% students in rural schools have access to computers and AI.",
    title: "Innovating Schools!",
    subtitle: "Promoting digitalisation!",
    img: innerLeft,
  },
  {
    id: 2,
    title: "",
    subtitle: "",
    img: innerMiddle,
    title: "Teach with AR",
    text: "Enhancing lives and creating impacts through digitalization.",
  },
  {
    id: 3,
    number: "28%",
    text: "28% students of Middle School drop out due to lack of Quality Schools and Financial Constraints. as per ASER, 2023.",
    title: "Innovating Schools!",
    subtitle: "Promoting digitalisation!",
    img: innerRight,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="carousel-container">
      <div className="slide">
        <div className="left">
          {currentSlide.number && (
            <div className="number">{currentSlide.number}</div>
          )}
          {currentSlide.text && <div className="text">{currentSlide.text}</div>}
        </div>
        <div className="right">
          <div className="top">
            <div className="is">{currentSlide.title}</div>
            {currentSlide.subtitle && <div>{currentSlide.subtitle}</div>}
          </div>
          <div className="bottom">
            <img src={currentSlide.img} alt={currentSlide.title} />
          </div>
        </div>
      </div>
      <Ai />
    </div>
  );
};

export default Carousel;
