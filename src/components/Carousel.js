import React, { useEffect, useState } from "react";

// import "./Carousel.scss";
import "./Carousel.css";
import innerMiddle from "../assets/middle.webp";
import innerLeft from "../assets/inner-left.webp";
import innerRight from "../assets/inner-right.webp";
import Ai from "./Ai"
import {Slide1,Slide2,Slide3} from "./Slides"

const Carousel = () => {
  const slides = [<Slide1 />, <Slide2 />, <Slide3 />]; // Array of slide components
  const [currentSlide, setCurrentSlide] = useState(0); // State for current slide

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Automatically cycle through slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="carousel-container">
    

      <div className="carousel-slide">{slides[currentSlide]}</div>

      
    </div>
  );
};

export default Carousel;
{/* <div>
    <div class="slide">
        <div class="left">
            <div class="number">10%</div>
            <div class="text">Only 10% students in rural schools have access to computers and AI. </div>
        </div>
        
        <div class="right">
            <div class="top">
          <div class="is">  Innovating Schools! </div>
            <br></br>
            Promoting digitalisation!
            </div>
            <div class="bottom">
				<img src={innerLeft} />
			</div>
        </div>
		</div>
		<Ai/>
    </div>
	<div class="slide1">
		<div class="left1">
            <div class="top1">
				<img src={innerMiddle}/>
			</div>
			<div class="bottom1">Teach with AR</div>
        </div>
        
        <div class="right1">
		<div className="text1">Enhancing lives and creating impacts through digitalization.</div>
        </div>
    </div>
    
	<div >
	<div class="slide">
        <div class="left">
            <div class="number">28%</div>
            <div class="text">28% students of Middle School drops out due to lack of Quality Schools and Financial Constraints.
			as per ASER, 2023 </div>
        </div>
        
        <div class="right">
            <div class="top">
          <div class="is">  Innovating Schools! </div>
            <br></br>
            Promoting digitalisation!
            </div>
            <div class="bottom">
				<img src={innerRight} />
			</div>

        </div>
		</div>
		<Ai/>
    </div> */}
{/* <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
	</div>
</div> */}
// import React, { useState } from "react";
// import "./Carousel.css";
// import innerMiddle from "../assets/middle.webp";
// import innerLeft from "../assets/inner-left.webp";
// import innerRight from "../assets/inner-right.webp";

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       number: "10%",
//       text: "Only 10% students in rural schools have access to computers and AI.",
//       image: innerLeft,
//       is: "Innovating Schools!",
//       message: "Promoting digitalisation!",
//     },
//     {
//       text1: "Enhancing lives and creating impacts through digitalization.",
//       image: innerMiddle,
//       message: "Teach with AR",
//     },
//     {
//       number: "28%",
//       text: "28% students of Middle School drops out due to lack of Quality Schools and Financial Constraints. as per ASER, 2023",
//       image: innerRight,
//       is: "Innovating Schools!",
//       message: "Promoting digitalisation!",
//     },
//   ];

//   const handleNext = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === slides.length - 1 ? 0 : prevSlide + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? slides.length - 1 : prevSlide - 1
//     );
//   };

//   return (
//     <div className="carousel">
//       <button className="prev" onClick={handlePrev}>
//         &#10094;
//       </button>
//       <div className="slide-container">
//         {slides.map((slide, index) => (
//           <div
//             className={`slide ${index === currentSlide ? "active" : ""}`}
//             key={index}
//           >
//             {index === 1 ? (
//               <div className="slide1">
//                 <div className="left1">
//                   <div className="top1">
//                     <img src={slide.image} alt="Slide" />
//                   </div>
//                   <div className="bottom1">{slide.message}</div>
//                 </div>
//                 <div className="right1">
//                   <div className="text1">{slide.text1}</div>
//                 </div>
//               </div>
//             ) : (
//               <div className="slide">
//                 <div className="left">
//                   <div className="number">{slide.number}</div>
//                   <div className="text">{slide.text}</div>
//                 </div>
//                 <div className="right">
//                   <div className="top">
//                     <div className="is">{slide.is}</div>
//                     <br />
//                     {slide.message}
//                   </div>
//                   <div className="bottom">
//                     <img src={slide.image} alt="Slide" />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <button className="next" onClick={handleNext}>
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default Carousel;
