import React, { useState } from "react";
import "./Home.scss";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HomeSlickCarousel from "../components/HomeSlickCarousel";
import com1 from "../assets/community-1.webp";
import com2 from "../assets/community-2.webp";
import com3 from "../assets/community-3.webp";
import com4 from "../assets/community-4.webp";
import off1 from "../assets/off1.webp";
import off2 from "../assets/off2.webp";
import off3 from "../assets/off3.webp";
import off4 from "../assets/off1.webp";
import off5 from "../assets/off1.webp";
import Projects from "../components/Projects";
import SuccessStories from "../components/SuccessStories";
import Testimonials from "../components/Testimonials";
import AwardsCarousel from "../components/AwardsCarousel";
import ctaImage from "../assets/image 13.webp"; // Adjust the path to your image
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

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
      images: [off4, off5, off1, off3, off2],
      description: [
        "Our Up-Skilling Programs are designed to equip individuals with the latest skills in various fields such as AI, data science, and digital marketing.",
        "These programs are tailored to meet industry demands and help participants stay ahead in their careers.",
      ],
    },
  };
  const handleClick = (offering) => {
    setSelectedOffering(offering);
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
        <span>
          How Are We Innovating with{" "}
          <span style={{ color: "#FFE353" }}>Technology</span>?
        </span>
        <div className="features">
          <div className="feature">
            <h3>AI for Teachers</h3>
            <p>
              Our AI-powered tools assist teachers in creating personalized
              lesson plans, grading assignments efficiently, and providing
              real-time feedback to students. This allows teachers to focus more
              on student engagement and less on administrative tasks.
            </p>
          </div>
          <div className="feature special">
            <h3>Smart classNamees</h3>
            <p>
              Equipped with the latest technology, our smart classNamerooms
              facilitate interactive and immersive learning experiences. From
              virtual reality field trips to digital whiteboards, we ensure that
              every lesson is engaging and impactful.
            </p>
          </div>
          <div className="feature">
            <h3>Skill Development Programs</h3>
            <p>
              Our skill development programs are designed to prepare students
              for the future workforce. We offer courses in coding, robotics,
              and critical thinking, ensuring that students develop the skills
              needed to thrive in a rapidly changing world.
            </p>
          </div>
        </div>
      </section>

      {/* <HomeSlickCarousel /> */}

      <section className="impact-metrics">
        <h2>Impact</h2>
        <div className="matrics-container">
          <div className="metric">
            <h3>200+</h3>
            <p>Workshops Organized</p>
          </div>
          <div className="metric">
            <h3>30,000+</h3>
            <p>Students Impacted</p>
          </div>
          <div className="metric">
            <h3>2000+</h3>
            <p>Success Stories</p>
          </div>
          <div className="metric">
            <h3>25+</h3>
            <p>Schools Collaborated</p>
          </div>
        </div>
      </section>

      <section className="community">
        <span>Our Community Members Come From</span>
        <div className="offerings">
          <div>
            <img src={com1} alt="Community Member 1" className="offering-img" />
          </div>
          <div>
            <img src={com2} alt="Community Member 2" className="offering-img" />
          </div>
          <div>
            <img src={com3} alt="Community Member 3" className="offering-img" />
          </div>
          <div>
            <img src={com4} alt="Community Member 4" className="offering-img" />
          </div>
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
            <button>Contact Us for Collaboration</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
