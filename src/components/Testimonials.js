import React, { useState } from "react";
import "./Testimonials.scss";
import student1 from "../assets/testimonials/student-1_11zon.webp";
import student2 from "../assets/testimonials/student-2_11zon.webp";
import teacher1 from "../assets/testimonials/teacher-1_11zon.webp";
import teacher2 from "../assets/testimonials/teacher-2_11zon.webp";
import parent1 from "../assets/testimonials/parent-1_11zon.webp";
import parent2 from "../assets/testimonials/parent-2_11zon.webp";

const testimonialsData = {
  students: [
    {
      id: 1,
      name: "Arpit Sikarwar",
      image: student1,
      content:
        "Cograd has been instrumental in shaping my career path. Their personalized guidance and industry insights helped me secure a prestigious internship, setting me on the right track towards my professional goals.",
    },
    {
      id: 2,
      name: "Khushbu",
      image: student2,
      content:
        "My experience with Cograd has been transformative. Their dedicated mentors and practical curriculum equipped me with the skills and confidence to excel in my chosen field.",
    },
  ],
  teachers: [
    {
      id: 3,
      name: "Saurabh Singh",
      image: teacher1,
      content:
        "Cograd's innovative approach to education has rejuvenated my teaching journey. Their emphasis on interactive learning tools and continuous professional development has made me a more effective educator.",
    },
    {
      id: 4,
      name: "Seetu Yadav",
      image: teacher2,
      content:
        "Cograd's support was invaluable in my transition to teaching abroad. Their global network and resources helped me navigate the complexities seamlessly, and I'm thriving in my new role.",
    },
  ],
  parents: [
    {
      id: 5,
      name: "Seelendra Singh",
      image: parent1,
      content:
        "Enrolling my child in Cograd's advanced courses was a game-changer. The personalized attention and hands-on learning approach significantly boosted my child's academic performance and confidence.",
    },
    {
      id: 6,
      name: "Saurabh Yadav",
      image: parent2,
      content:
        "Enrolling my child in Cograd's advanced courses was a game-changer. The personalized attention and hands-on learning approach significantly boosted my child's academic performance and confidence.",
    },
  ],
};

const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState("students");
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

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
                setSelectedTestimonial(null); // Reset selected testimonial on category change
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="content">
          <div className="slider-container">
            {testimonialsData[selectedCategory].map((testimonial, index) => (
              <div
                className={`image-wrapper ${
                  selectedTestimonial === testimonial.id ? "active" : ""
                }`}
                key={testimonial.id}
                onClick={() => setSelectedTestimonial(testimonial.id)}
              >
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
            ))}
          </div>
          {selectedTestimonial && (
            <div className="details">
              {testimonialsData[selectedCategory].map((testimonial) => {
                if (testimonial.id === selectedTestimonial) {
                  return (
                    <div className="detail-content" key={testimonial.id}>
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.content}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
