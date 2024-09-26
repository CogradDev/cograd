import React from "react";
import "./Carousel.css";
import innerMiddle from "../assets/middle.webp";
import innerLeft from "../assets/ai.webp";
import innerRight from "../assets/aser.webp";
import Ai from "./Ai"
export const Slide1 = () => {
  return (
    <div>
      <div class="slide">
        <div class="left">
          <div class="number">10%</div>
          <div class="text">
            Only 10% students in rural schools have access to computers and AI.{" "}
          </div>
        </div>

        <div class="right">
          <div class="top">
            <div class="is"> Innovating Schools! </div>
            <br></br>
            Promoting digitalisation!
          </div>
          <div class="bottom"><img src={innerLeft} /></div>
        </div>
      </div>
      <Ai />
    </div>
  );
};
export const Slide2 = () => {
  return (
    <>
      <div class="slide1">
        <div class="left1">
          <div class="top1"><img src={innerMiddle}/></div>
          <div class="bottom1">Teach with AR</div>
        </div>

        <div class="right1">
          <div className="text1">
            Enhancing lives and creating impacts through digitalization.
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export const Slide3 = () => {
  return (
    <div>
      <div class="slide">
        <div class="left">
          <div class="number">28%</div>
          <div class="text">
            28% students of Middle School drops out due to lack of Quality
            Schools and Financial Constraints. as per ASER, 2023{" "}
          </div>
        </div>

        <div class="right">
          <div class="top">
            <div class="is"> Innovating Schools! </div>
            <br></br>
            Promoting digitalisation!
          </div>
          <div class="bottom"> <img src={innerRight} /> </div>
        </div>
      </div>
      <Ai />
    </div>
  );
};
