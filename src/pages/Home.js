import React, { useEffect, useState } from "react";
import "./Home.scss";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HomeSlickCarousel from "../components/HomeSlickCarousel";
import com1 from "../assets/partners/community-1.webp";
import com2 from "../assets/partners/community-2.webp";
import com3 from "../assets/partners/community-3.webp";
import com4 from "../assets/partners/community-4.webp";
import off1 from "../assets/key-offerings/school1.jpg";
import off2 from "../assets/key-offerings/school2.jpg";
import off3 from "../assets/key-offerings/school3.jpg";
import off4 from "../assets/key-offerings/school4.jpg";
import off5 from "../assets/key-offerings/school5.jpg";
import off6 from "../assets/key-offerings/upskill1.jpg";
import off7 from "../assets/key-offerings/upskill2.jpg";
import off8 from "../assets/key-offerings/upskill3.jpg";
import off9 from "../assets/key-offerings/upskill4.jpg";
import off10 from "../assets/key-offerings/upskill5.jpg";
import aiImage from "../assets/innovation/ai-for-teachers.jpg";
import smartClassesImage from "../assets/innovation/smart-classes.jpg";
import skillDevelopmentImage from "../assets/innovation/skill-development.jpg";
import Projects from "../components/Projects";
import SuccessStories from "../components/SuccessStories";
import Testimonials from "../components/Testimonials";
import AwardsCarousel from "../components/AwardsCarousel";
import ctaImage from "../assets/image 13.webp"; // Adjust the path to your image
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { CountUp } from "countup.js";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const [selectedOffering, setSelectedOffering] = useState("Cograd Schools");

  const offeringsData = {
    "Cograd Schools": {
      images: [off1, off2, off3, off4, off5],
      description: [
        "At Cograd Schools, we provide a holistic educational experience by integrating modern technology and traditional teaching methods.",
        "Our programs focus on critical thinking, creativity, and collaboration to prepare students for the future.",
      ],
    },
    "Up-Skilling Programs": {
      images: [off6, off7, off8, off9, off10],
      description: [
        "Our Up-Skilling Programs are designed to equip individuals with the latest skills in various fields such as AI, data science, and digital marketing.",
        "These programs are tailored to meet industry demands and help participants stay ahead in their careers.",
      ],
    },
  };

  const communityMembers = [
    { id: 1, image: com1, alt: "Community Member 1" },
    { id: 2, image: com2, alt: "Community Member 2" },
    { id: 3, image: com3, alt: "Community Member 3" },
    { id: 4, image: com4, alt: "Community Member 4" },
    { id: 5, image: com1, alt: "Community Member 5" }, // Adding more images for carousel
    { id: 6, image: com2, alt: "Community Member 6" },
    { id: 7, image: com3, alt: "Community Member 7" },
    { id: 8, image: com4, alt: "Community Member 8" },
  ];


  useEffect(() => {
    const options = {
      duration: 2, // duration in seconds
      separator: ",", // thousands separator
    };

    const updateWithPlusSign = (id, value) => {
      const countUp = new CountUp(id, value, options);
      if (!countUp.error) {
        countUp.start(() => {
          document.getElementById(id).innerHTML += "+";
        });
      } else {
        console.error(countUp.error);
      }
    };

    updateWithPlusSign("workshops", 200);
    updateWithPlusSign("students", 30000);
    updateWithPlusSign("successStories", 2000);
    updateWithPlusSign("schools", 25);
  }, []);

  const handleClick = (offering) => {
    setSelectedOffering(offering);
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrow: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ]
  };

  const handleButtonClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSffTQsBZwZizYfSGFD0EBk0wswkqi1sgmr5AeOi_xVymPT80w/viewform?embedded=true",
      "_blank"
    );
  };

  return (
    <div className="home">
      <Helmet>
        <title>Cograd - Innovative and Affordable Education</title>
        <meta
          name="description"
          content="Cograd offers innovative and affordable education solutions. Discover our vision for accessible education, services, and partnership opportunities. Learn more about Cograd now."
        />
      </Helmet>
      <Header />
      <HeroSection />

      <section className="innovation">
        <div className="container">
          <span>
            How Are We Innovating with{" "}
            <span className="highlight">Technology</span>?
          </span>
          <div className="features">
            <div className="feature">
              <img
                src={aiImage}
                alt="AI for Teachers"
                className="feature-image"
              />
              <div className="feature-content">
                <h3>AI for Teachers</h3>
                <p>
                  Our AI-powered tools assist teachers in creating personalized
                  lesson plans, grading assignments efficiently, and providing
                  real-time feedback to students.
                </p>
              </div>
            </div>
            <div className="feature special">
              <img
                src={smartClassesImage}
                alt="Smart Classes"
                className="feature-image"
              />
              <div className="feature-content">
                <h3>Smart Classes</h3>
                <p>
                  Equipped with the latest technology, our smart classrooms
                  facilitate interactive and immersive learning experiences.
                </p>
              </div>
            </div>
            <div className="feature">
              <img
                src={skillDevelopmentImage}
                alt="Skill Development Programs"
                className="feature-image"
              />
              <div className="feature-content">
                <h3>Skill Development Programs</h3>
                <p>
                  Our skill development programs prepare students for the future
                  workforce with courses in coding, robotics, and critical
                  thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <HomeSlickCarousel /> */}

      <section className="impact-metrics">
        <h2>Impact</h2>
        <div className="matrics-container">
          <div className="metric">
            <h3 id="workshops">200+</h3>
            <p>Workshops Organized</p>
          </div>
          <div className="metric">
            <h3 id="students">30,000+</h3>
            <p>Students Impacted</p>
          </div>
          <div className="metric">
            <h3 id="successStories">2000+</h3>
            <p>Success Stories</p>
          </div>
          <div className="metric">
            <h3 id="schools">25+</h3>
            <p>Schools Collaborated</p>
          </div>
        </div>
      </section>

      <section className="community">
      <span>Our Community Members Come From</span>
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {communityMembers.map((member) => (
            <div key={member.id}>
              <img src={member.image} alt={member.alt} className="carousel-img" />
            </div>
          ))}
        </Slider>
      </div>
    </section>

      <section className="key-offerings">
        <div className="key-offering-heading">
          <h1>Our Key Offerings</h1>
          <div className="highlights">
            <span
              className={selectedOffering === "Cograd Schools" ? "active" : ""}
              onClick={() => handleClick("Cograd Schools")}
            >
              Cograd Schools
            </span>
            <span
              className={
                selectedOffering === "Up-Skilling Programs" ? "active" : ""
              }
              onClick={() => handleClick("Up-Skilling Programs")}
            >
              Up-Skilling Programs
            </span>
          </div>
        </div>
        <div className="key-offering-contents">
          <div className="circle-container">
            {offeringsData[selectedOffering].images.map((image, index) => (
              <div className="offering-img" key={index}>
                <img src={image} alt={`Offering ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="content">
            <div className="details">
              <ul>
                {offeringsData[selectedOffering].description.map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <h1 className="story-heading">
        Stories of Success, Hope and Transformation
      </h1>

      <SuccessStories />
      <AwardsCarousel />
      <Testimonials />

      {/* <section className="gallery-cta">
        <h2>Visit our Gallery to See How We Work!</h2>
        <button>Visit</button>
      </section> */}

      <section className="collaboration-cta">
        <div className="cta-content">
          <div className="cta-image">
            <img src={ctaImage} alt="Upgrade your school" />
          </div>
          <div className="cta-text">
            <h2>Upgrade your school</h2>
            <p>
              Discover innovative solutions to elevate your educational
              institution with Cograd. We provide cutting-edge technology,
              personalized support, and tailored programs to enhance teaching,
              learning, and student outcomes.
            </p>
            <button onClick={handleButtonClick}>
              Contact Us for Collaboration
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
