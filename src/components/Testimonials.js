import React, { useState } from "react";
import "./Testimonials.scss";
import student1 from "../assets/testimonials/stu4.webp";
import student2 from "../assets/testimonials/stu3.webp";
import teacher1 from "../assets/testimonials/teacher1.webp";
import teacher2 from "../assets/testimonials/teacher2.webp";
import parent from "../assets/testimonials/par1.webp";

const testimonialsData = {
  students: [
    {
      id: 1,
      name: "Ananya Sharma",
      Image: student1,
      content:
        "Cograd has been instrumental in shaping my career path. Their personalized guidance and industry insights helped me secure a prestigious internship, setting me on the right track towards my professional goals.",
    },
    {
      id: 2,
      name: "Amitabh Singh",
      Image: student2,
      content:
        "My experience with Cograd has been transformative. Their dedicated mentors and practical curriculum equipped me with the skills and confidence to excel in my chosen field.",
    },
  ],
  teachers: [
    {
      id: 3,
      name: "Radhika Patel",
      Image: teacher2,
      content:
        "Cograd's innovative approach to education has rejuvenated my teaching journey. Their emphasis on interactive learning tools and continuous professional development has made me a more effective educator.",
    },
    {
      id: 4,
      name: "Rohit Kumar",
      Image: teacher1,
      content:
        "Cograd's support was invaluable in my transition to teaching abroad. Their global network and resources helped me navigate the complexities seamlessly, and I'm thriving in my new role.",
    },
  ],
  parents: [
    {
      id: 5,
      name: "Sneha Gupta",
      Image: parent,
      content:
        "Enrolling my child in Cograd's advanced courses was a game-changer. The personalized attention and hands-on learning approach significantly boosted my child's academic performance and confidence.",
    },
  ],
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("students");

  const nextTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % testimonialsData[selectedCategory].length
    );
  };

  return (
    <div className="testimonials">
      <div className="container-full">
        <h2 className="title">Testimonials</h2>
        <div className="button-group">
          {Object.keys(testimonialsData).map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="content">
          <div className="slider-container">
            <div className="slider-card">
              <div className="card-box">
                <div className="image">
                  <img src={testimonialsData[selectedCategory][currentIndex].Image} alt="Child" />
                </div>
                <div className="content-row">
                  <div className="details">
                    <div className="name">
                      <strong>
                        {testimonialsData[selectedCategory][currentIndex].name}
                      </strong>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      {testimonialsData[selectedCategory][currentIndex].content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navigation-container">
              <div className="pagination-nav">
                {testimonialsData[selectedCategory].map(
                  (testimonial, index) => (
                    <a
                      key={testimonial.id}
                      href={`#testi_slide${testimonial.id}`}
                      className={index === currentIndex ? "active" : ""}
                    >
                      {index + 1}
                    </a>
                  )
                )}
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
