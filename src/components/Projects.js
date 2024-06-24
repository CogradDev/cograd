import React, { useState, useEffect } from "react";
import "./Projects.scss";
import com1 from "../assets/off1.webp";
import com2 from "../assets/off2.webp";
import com3 from "../assets/off3.webp";

// Assuming you have imported project images
const projectData = [
  {
    id: 1,
    image: com1,
    alt: "Project 1",
    description:
      "The Smart Classes initiative integrates modern technology into classrooms, providing students with interactive and engaging learning environments. Our goal is to transform traditional education and make learning more enjoyable.",
  },
  {
    id: 2,
    image: com2,
    alt: "Project 2",
    description:
      "We are renting 20,000 schools all over the country, offering a modern education curriculum at a very low cost. This new model of schooling aims to make quality education accessible to everyone.",
  },
  {
    id: 3,
    image: com3,
    alt: "Project 3",
    description:
      "Our AI for Teachers project leverages artificial intelligence to assist educators in creating personalized learning experiences for students. This project aims to enhance the quality of education and make teaching more efficient.",
  },
  {
    id: 4,
    image: com1,
    alt: "Project 1",
    description:
      "The Smart Classes initiative integrates modern technology into classrooms, providing students with interactive and engaging learning environments. Our goal is to transform traditional education and make learning more enjoyable.",
  },
  {
    id: 5,
    image: com2,
    alt: "Project 2",
    description:
      "We are renting 40,000 schools all over the country, offering a modern education curriculum at a very low cost. This new model of schooling aims to make quality education accessible to everyone.",
  },
  {
    id: 6,
    image: com3,
    alt: "Project 3",
    description:
      "Our AI for Teachers project leverages artificial intelligence to assist educators in creating personalized learning experiences for students. This project aims to enhance the quality of education and make teaching more efficient.",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % projectData.length);
  };

  const getVisibleProjects = () => {
    const endIndex = currentIndex + slidesToShow;
    if (endIndex <= projectData.length) {
      return projectData.slice(currentIndex, endIndex);
    } else {
      return [
        ...projectData.slice(currentIndex),
        ...projectData.slice(0, endIndex - projectData.length),
      ];
    }
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section className="projects">
      <h2>Our Projects</h2>
      <div className="project-list">
        {visibleProjects.map((project) => (
          <div key={project.id} className="project">
            <img src={project.image} alt={project.alt} className="project-img" />
            <div className="project-details">
              <span>{project.description}</span>
            </div>
          </div>
        ))}
      </div>
      {projectData.length > slidesToShow && (
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      )}
    </section>
  );
};

export default Projects;
