import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./AboutUs.scss"; // Import the SCSS file

import mission from "../assets/about-us/mission_11zon.webp";
import vission from "../assets/about-us/vision_11zon.webp";
import team from "../assets/our-team.webp";
import innovation from "../assets/innovation.webp";
import integrity from "../assets/integrity.webp";
import excellence from "../assets/excellence.webp";
import himanshu from "../assets/himanshu.webp";
import saurabh from "../assets/saurabh.webp";
import j1 from "../assets/journey/j1.webp";
import j2 from "../assets/journey/j2.webp";
import j3 from "../assets/journey/j3.webp";
import j4 from "../assets/journey/j4.webp";
import j5 from "../assets/journey/j5.webp";
import com1 from "../assets/partners/as1.webp";
import com2 from "../assets/partners/as2.webp";
import com3 from "../assets/partners/as3.webp";
import com4 from "../assets/partners/as4.webp";
import com5 from "../assets/partners/as5.webp";
import com6 from "../assets/partners/as6.webp";
import media from "../assets/media_11zon.webp";
import mobileMedia from "../assets/mobileMedia_11zon.webp";
import { FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { innovativeText: "Innovation", image: innovation },
  { innovativeText: "Integrity", image: integrity },
  { innovativeText: "Excellence", image: excellence },
  // Add more values and corresponding images as needed
];

const data1 = [
  {
    username: "Himanshu Chaurasia",
    description:
      "I had the vision to build amazing schools in India. I handle and guide the team as the executive",
    linkedin: "https://www.linkedin.com/in/chaurasia-himanshu/",
    role: "Founder, CEO",
    image: himanshu,
  },
  {
    username: "Saurabh Yadav",
    description:
      "I joined the Cograd team as COO at a very early age. I handle the operations side of Cograd",
    linkedin: "https://www.linkedin.com/in/saurabh-yadav-8048a013b/",
    role: "Co-Founder, COO",
    image: saurabh,
  },
];

const partnerData = [
  { partnerImg: com1 },
  { partnerImg: com2 },
  { partnerImg: com3 },
  { partnerImg: com4 },
  { partnerImg: com5 },
  { partnerImg: com6 },
];

const journeyData = [
  {
    imgSrc: j1,
    title: "Step 1: Inception",
    description: "Our journey began with a vision to transform education.",
  },
  {
    imgSrc: j2,
    title: "Step 2: First Milestone",
    description:
      "We reached our first milestone by launching our first school.",
  },
  {
    imgSrc: j3,
    title: "Step 3: Growth",
    description: "Expanding our reach and impacting more lives.",
  },
  {
    imgSrc: j4,
    title: "Step 4: Innovation",
    description: "Incorporating innovative teaching methods and technologies.",
  },
  {
    imgSrc: j5,
    title: "Step 5: Future",
    description:
      "Continuing to strive for excellence and accessibility in education.",
  },
];

const AboutUsGeanco = ({ data }) => {
  return (
    <div className="aboutus-card">
      <div className="aboutus-card-inner">
        <div className="aboutus-card-image">
          <img
            src={data.image}
            alt="secondaryimage"
            className="aboutus-card-image-img"
          />
        </div>
        <span className="aboutus-card-heading">{data.username}</span>
        <span className="aboutus-card-description">{data.description}</span>
        <div className="aboutus-card-role-container">
          <div className="aboutus-card-role-inner">
            <span className="aboutus-card-role">{data.role}</span>
            <FaLongArrowAltRight className="aboutus-card-arrow" />
          </div>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="aboutus-card-linkedin " />
          </a>
        </div>
      </div>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  arrow: false,
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
  ],
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
              <img src={mission} alt="Mission" className="aboutus-hero-image" />
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
                <img
                  src={vission}
                  alt="Vision"
                  className="aboutus-hero-image"
                />
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
                <img src={team} alt="Team" className="aboutus-hero-image" />
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
                  <div className="values-front">
                    <h1 className="aboutus-values-text">{d.innovativeText}</h1>
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
              <AboutUsGeanco data={d} key={"teamList" + index} />
            ))}
          </Suspense>
        </div>
      </div>

      {/* partners section */}
      <section className="aboutus-partners">
        <h5 className="aboutus-partners-heading">Our Associations</h5>
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
                    alt={`journey ${index + 1}`}
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

      {/* Social Presence section */}
      <div className="social-presence">
        <h4 className="aboutus-founders-heading">Our Social Presence</h4>

        {/* Embedding YouTube Videos */}
        <div className="aboutus-founders-list">
          <iframe
            src="https://www.youtube.com/embed/xP6glTTCXKk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/jZAr0WVOsGI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/RLCRm3QvMm0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/Qh8ip-3QHTk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Adding an Image below */}
        <img
          src={media} // Desktop image
          alt="Social presence image"
          className="social-presence-image desktop-image"
        />
        <img
          src={mobileMedia} // Mobile image
          alt="Social presence image"
          className="social-presence-image mobile-image"
        />
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
