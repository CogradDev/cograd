import React from "react";
import com1 from "../assets/off1.webp"; // Adjust the path to your image file
import com2 from "../assets/off2.webp";
import com3 from "../assets/off3.webp";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Our Projects</h2>
      <div className="project-list">
        <div className="project">
          <img src={com1} alt="Community Member 1" className="project-img" />
          <div className="project-details">
            <p>
              The Smart Classes initiative integrates modern technology into
              classrooms, providing students with interactive and engaging
              learning environments. Our goal is to transform traditional
              education and make learning more enjoyable.
            </p>
          </div>
        </div>
        <div className="project">
          <img src={com2} alt="Community Member 2" className="project-img" />
          <div className="project-details">
            <p>
              We are renting 20,000 schools all over the country, offering a
              modern education curriculum at a very low cost. This new model of
              schooling aims to make quality education accessible to everyone.
            </p>
          </div>
        </div>
        <div className="project">
          <img src={com3} alt="Community Member 3" className="project-img" />
          <div className="project-details">
            <p>
              Our AI for Teachers project leverages artificial intelligence to
              assist educators in creating personalized learning experiences for
              students. This project aims to enhance the quality of education
              and make teaching more efficient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
