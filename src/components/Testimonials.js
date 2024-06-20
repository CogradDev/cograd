import React, { useState } from "react";
import "./Testimonials.scss";
import childPic from "../assets/testimonial-child-pic.png";

const testimonialsData = {
  students: [
    {
      id: 1,
      name: "Ananya Sharma",
      content:
        "Cograd has been instrumental in shaping my career path. Their personalized guidance and industry insights helped me secure a prestigious internship, setting me on the right track towards my professional goals.",
    },
    {
      id: 2,
      name: "Amitabh Singh",
      content:
        "My experience with Cograd has been transformative. Their dedicated mentors and practical curriculum equipped me with the skills and confidence to excel in my chosen field.",
    },
  ],
  teachers: [
    {
      id: 3,
      name: "Radhika Patel",
      content:
        "Cograd's innovative approach to education has rejuvenated my teaching journey. Their emphasis on interactive learning tools and continuous professional development has made me a more effective educator.",
    },
    {
      id: 4,
      name: "Rohit Kumar",
      content:
        "Cograd's support was invaluable in my transition to teaching abroad. Their global network and resources helped me navigate the complexities seamlessly, and I'm thriving in my new role.",
    },
  ],
  parents: [
    {
      id: 5,
      name: "Sneha Gupta",
      content:
        "Enrolling my child in Cograd's advanced courses was a game-changer. The personalized attention and hands-on learning approach significantly boosted my child's academic performance and confidence.",
    },
  ],
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("students");

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData[selectedCategory].length);
  };

  return (
    <div className="testimonials">
      <div className="container-full">
        <h2 className="title">Testimonials</h2>
        <div className="button-group">
          <button
            className={selectedCategory === "students" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("students");
              setCurrentIndex(0);
            }}
          >
            Students
          </button>
          <button
            className={selectedCategory === "teachers" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("teachers");
              setCurrentIndex(0);
            }}
          >
            Teachers
          </button>
          <button
            className={selectedCategory === "parents" ? "active" : ""}
            onClick={() => {
              setSelectedCategory("parents");
              setCurrentIndex(0);
            }}
          >
            Parents
          </button>
        </div>
        <div className="content">
          <div className="image">
            <img src={childPic} alt="Child" />
          </div>
          <div className="slider-container">
            <div className="slider-card">
              <div className="card-box">
                <div className="content-row">
                  <div className="details">
                    <div className="name">
                      <strong>{testimonialsData[selectedCategory][currentIndex].name}</strong>
                    </div>
                  </div>
                  <div className="content">
                    <p>{testimonialsData[selectedCategory][currentIndex].content}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navigation-container">
              <div className="pagination-nav">
                {testimonialsData[selectedCategory].map((testimonial, index) => (
                  <a
                    key={testimonial.id}
                    href={`#testi_slide${testimonial.id}`}
                    className={index === currentIndex ? "active" : ""}
                  >
                    {index + 1}
                  </a>
                ))}
              </div>
              <button className="next-story-button" onClick={nextTestimonial}>
                Next Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
