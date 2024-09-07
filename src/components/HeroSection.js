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
          <button className="teach-with-ai">Teach with AI</button>
          <button className="watch-video">
            <FaPlay style={{ marginRight: 10 }} /> Watch Video
          </button>
        </div>
        
        <div className="statistics">
          <div className="outer-left" data-aos="fade-right">
            <div className="top-outer-left-box">
              <img src={bigFileHomeRightOpen} alt="" />
              <img src={Line7} alt="" className="line7" />
              <div>
                <h2>4%</h2>
                <p>
                  Only 4% students in rural schools have access to computers and
                  AI.
                </p>
              </div>
            </div>
            <div className="bottom-outer-left-box">
              <p>Let them know AI!</p>
            </div>
          </div>

          <div className="middle">
            <div className="inner-left" data-aos="fade-up">
              <img src={innerLeft} alt="" />
              <div>
                <p>Engaging children through AI</p>
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
            <div className="inner-right" data-aos="fade-up">
              <img src={innerRight} alt="" />
              <div>
                <p>AI Empowering individuals</p>
                <button className="teach-with-ai">Teach with AI</button>
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
                  Only 4% students in rural schools have access to computers and
                  AI.
                </p>
              </div>
            </div>
            <div className="bottom-outer-right-box">
              <p>Innovating Schools! Promoting digitalisation!</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HeroSection;
