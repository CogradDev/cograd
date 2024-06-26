import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./AboutUs.scss"; // Import the SCSS file

import img1 from "../assets/aw1.webp";
import img2 from "../assets/aw2.webp";
import img3 from "../assets/aw3.webp";
import img4 from "../assets/aw4.webp";
import img5 from "../assets/aw5.webp";
import img6 from "../assets/c1.webp";
import img7 from "../assets/c2.webp";
import img8 from "../assets/c3.webp";
import img9 from "../assets/c4.webp";
import img10 from "../assets/c5.webp";
import img11 from "../assets/c6.webp";
import img12 from "../assets/community-1.webp";
import img13 from "../assets/community-2.webp";
import img14 from "../assets/community-3.webp";
import img15 from "../assets/community-4.webp";
import { FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { innovativeText: "Innovation", image: img1 },
  { innovativeText: "Integrity", image: img2 },
  { innovativeText: "Excellence", image: img3 },
  // Add more values and corresponding images as needed
];

const data1 = [
  {
    username: "Himanshu Chaurasia",
    description:
      "I had the vision to build amazing schools in India. I handle and guide the team as the executive",
    linkedin: "",
    role: "Founder, CEO",
  },
  {
    username: "Saurabh Yadav",
    description:
      "I joined the Cograd team as COO at a very early age. I handle the operations side of Cograd",
    linkedin: "",
    role: "Co-Founder, COO",
  },
];

const partnerData = [
  { partnerImg: img12 },
  { partnerImg: img13 },
  { partnerImg: img14 },
  { partnerImg: img15 },
  { partnerImg: img12 },
  { partnerImg: img13 },
];

const journeyData = [
  {
    imgSrc: img7,
    title: "Step 1: Inception",
    description: "Our journey began with a vision to transform education.",
  },
  {
    imgSrc: img8,
    title: "Step 2: First Milestone",
    description:
      "We reached our first milestone by launching our first school.",
  },
  {
    imgSrc: img9,
    title: "Step 3: Growth",
    description: "Expanding our reach and impacting more lives.",
  },
  {
    imgSrc: img10,
    title: "Step 4: Innovation",
    description: "Incorporating innovative teaching methods and technologies.",
  },
  {
    imgSrc: img11,
    title: "Step 5: Future",
    description:
      "Continuing to strive for excellence and accessibility in education.",
  },
];

const AboutUsGeanco = ({
  username = "Himanshu Chaurasia",
  description = (
    <>
      I had the vision to build amazing schools in India. I handle and guide the
      team as
      <br />
      the executive
    </>
  ),
  founderceo = "Founder, CEO",
  ...props
}) => {
  return (
    <div className="aboutus-card">
      <div className="aboutus-card-inner">
        <div className="aboutus-card-image">
          <img
            src={img1}
            alt="secondaryimage"
            className="aboutus-card-image-img"
          />
        </div>
        <span className="aboutus-card-heading">{username}</span>
        <span className="aboutus-card-description">{description}</span>
        <div className="aboutus-card-role-container">
          <div className="aboutus-card-role-inner">
            <span className="aboutus-card-role">{founderceo}</span>
            <FaLongArrowAltRight className="aboutus-card-arrow" />
          </div>
          <FaLinkedin className="aboutus-card-linkedin " />
        </div>
      </div>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  arrow : false,
  speed: 500,
  slidesToShow: 4, // Adjust the number of slides shown per screen
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
  ]
};

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <Helmet>
        <title>About Cograd - Innovative and Affordable Education</title>
        <meta
          name="description"
          content="Discover the vision of Cograd's founders for building accessible and innovative schools in India. Learn about our journey, services, and partnership. Contact us for more information."
        />
      </Helmet>
      <Header />
      <div className="aboutus-hero">
        <div className="aboutus-hero-image-1">
          <div className="flip-card-inner">
            <div className="front">
              <div className="image-overlay">
                <h1>Mission</h1>
              </div>
              <img src={img4} alt="Mission" className="aboutus-hero-image" />
            </div>
            <div className="back">
              <p>
                Our mission is to provide quality education that is innovative,
                affordable, and accessible to all.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutus-hero-secondary">
          <div className="aboutus-hero-image-2">
            <div className="flip-card-inner">
              <div className="front">
                <div className="image-overlay">
                  <h1>Vision</h1>
                </div>
                <img src={img4} alt="Vision" className="aboutus-hero-image" />
              </div>
              <div className="back">
                <p>
                  Our vision is to revolutionize education with cutting-edge
                  technology and personalized support.
                </p>
              </div>
            </div>
          </div>
          <div className="aboutus-hero-image-3">
            <div className="flip-card-inner">
              <div className="front">
                <div className="image-overlay">
                  <h1>Our Team</h1>
                </div>
                <img src={img4} alt="Team" className="aboutus-hero-image" />
              </div>
              <div className="back">
                <p>
                  Meet our dedicated team of professionals who are committed to
                  making a difference in education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="aboutus-values">
        <h4 className="aboutus-values-heading">Our Values</h4>
        <div className="aboutus-values-list">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <div key={`featuresList${index}`} className="aboutus-values-item">
                <div className="values-flip-card-inner">
                  <div className="values-front">
                    <h1 className="aboutus-values-text">{d.innovativeText}</h1>
                  </div>
                  <div
                    className="values-back"
                    style={{ backgroundImage: `url(${d.image})` }}
                  >
                    {/* Image background set dynamically */}
                  </div>
                </div>
              </div>
            ))}
          </Suspense>
        </div>
      </div>

      {/* founders section */}
      <div className="aboutus-founders">
        <h4 className="aboutus-founders-heading">Our Founders</h4>
        <div className="aboutus-founders-list">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data1.map((d, index) => (
              <AboutUsGeanco {...d} key={"teamList" + index} />
            ))}
          </Suspense>
        </div>
      </div>

      {/* partners section */}
      <section className="aboutus-partners">
      <h5 className="aboutus-partners-heading">Our Partners</h5>
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {partnerData.map((member) => (
            <div key={member.id}>
              <img src={member.partnerImg} alt="" className="carousel-img" />
            </div>
          ))}
        </Slider>
      </div>
    </section>

      {/* journey section */}
      <div className="aboutus-journey">
        <div className="aboutus-journey-inner">
          <div className="aboutus-journey-content">
            <h2 className="aboutus-journey-heading">Our Journey</h2>
            <div className="aboutus-journey-timeline">
              {journeyData.map((journey, index) => (
                <div className="aboutus-journey-step" key={index}>
                  <img
                    src={journey.imgSrc}
                    alt={`journey image ${index + 1}`}
                    className="aboutus-journey-image"
                  />
                  <div className="aboutus-journey-text">
                    <h3>{journey.title}</h3>
                    <p>{journey.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
