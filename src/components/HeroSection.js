import React, { useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import "./HeroSection.scss";
import bigFileHomeRightOpen from "../assets/file-home-right-open.webp";
import bigFileHomeLeftOpen from "../assets/file-home-left-open.webp";
import innerMiddle from "../assets/inner-middle.webp";
import innerLeft from "../assets/inner-left.webp";
import innerRight from "../assets/inner-right.webp";
import Line7 from "../assets/svg/Line 7.svg";
import Rect382 from "../assets/svg/Rectangle 382.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 200 });
    AOS.refresh();
  }, []);

  return (
    <div className="hero-section-container">
      <section className="hero">
        <h1>Engage . Enhance . Empower </h1>
        <h2>Building Next-generation affordable schools for Bharat</h2>
        <div className="cta-buttons">
          <button className="teach-with-ai">
            <a
              href="https://medha-frontend.vercel.app/"
              target="_blank"
              style={{ color: "black", textDecoration: "none" }}
            >
              Teach with AI
            </a>
          </button>
          <button className="watch-video">
            <FaPlay style={{ marginRight: 10 }} />
            <a
              href="https://youtu.be/QtDKl6HDf2g"
              target="_blank"
              style={{ color: "black", textDecoration: "none" }}
            >
              Watch Video
            </a>
          </button>
        </div>

        <div className="statistics">
          <div className="outer-left" data-aos="fade-right">
            <div className="top-outer-left-box">
              <img src={bigFileHomeRightOpen} alt="" />
              <img src={Line7} alt="" className="line7" />
              <div>
                <h2>10%</h2>
                <p>
                  Only 10% students in rural schools have access to computers
                  and AI.
                </p>
              </div>
            </div>
            <div className="bottom-outer-left-box">
              <a
                href="https://blogs.cisco.com/csr/thingqbator-creating-an-education-ecosystem-to-nurture-innovation"
                target="_blank"
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                How we make Schools
                <br /> Innovative?
              </a>
            </div>
          </div>

          <div className="middle">
            <div className="inner-left" data-aos="fade-up">
              <img src={innerLeft} alt="" />
              <div>
                <p>Engaging children with Medha AI</p>
              </div>
            </div>
            <div className="inner-middle" data-aos="fade-up">
              <img src={innerMiddle} alt="" />
              <div>
                <p>
                  Enhancing lives and creating impacts through digitalization.
                </p>
                <button className="teach-with-ai">Teach with VR</button>
              </div>
            </div>
            <div className="inner-left" data-aos="fade-up">
              <img src={innerRight} alt="" />
              <div>
                <p>Empowering Teachers with Medha AI</p>
              </div>
            </div>
          </div>

          <div className="outer-right" data-aos="fade-left">
            <div className="top-outer-right-box">
              <img src={bigFileHomeLeftOpen} alt="" />
              <img src={Rect382} alt="" className="rect382" />
              <div>
                <h2>28%</h2>
                <p>
                 
                  28% students of Middle School drops out due to lack of Quality
                  Schools and Financial Constraints.<br/>
                  <i style={{fontSize: 14}}>as per ASER, 2023</i>
                </p>
              </div>
            </div>
            <div className="bottom-outer-right-box">
              <a
                href="https://yourstory.com/hindi/this-startup-is-giving-hi-tech-education-to-children-in-villages-cograd"
                target="_blank"
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                How We make Schools <br />
                Affordable?
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
