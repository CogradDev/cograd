import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState } from "react";
import img2 from "../assets/integrity.webp";
import img1 from "../assets/Our-projects/project1.webp";
import img3 from "../assets/Our-projects/project3.webp";
import img4 from "../assets/key-offerings/school5.webp";
import img5 from "../assets/innovation/skill-development.webp";
import collab from "../assets/image 13.webp";
import "./Services.scss";

const servicesList = [
  {
    name: "School Upgradation",
    description:
      "Enhance your school’s infrastructure and facilities with our comprehensive school upgradation services. We provide tailored solutions to modernize classrooms, labs, and administrative areas, ensuring a conducive environment for learning and growth.",
    image: img1,
  },
  {
    name: "Smart Classes",
    description:
      "Transform traditional classrooms into interactive learning spaces with our smart classes solutions. Utilizing cutting-edge technology, we enhance engagement and comprehension through multimedia content, collaborative tools, and real-time assessments.",
    image: img2,
  },
  {
    name: "Smart Labs / Dream Lab",
    description:
      "Introduce innovation into education with our smart labs and dream lab programs. Students engage in hands-on experiments, simulations, and project-based learning, fostering creativity, critical thinking, and problem-solving skills.",
    image: img3,
  },
  {
    name: "Digitalising Schools",
    description:
      "Digitally transform your educational institution with our digitalization services. From administrative processes to curriculum delivery, we streamline operations, improve access to resources, and enhance overall efficiency.",
    image: img4,
  },
  {
    name: "Personalized Learning Paths",
    description:
      "Empower every student with personalized learning paths tailored to their unique needs and learning styles. Through adaptive technologies and data-driven insights, we optimize learning outcomes and student success.",
    image: img5,
  },
];





const Modal = ({ isOpen, service, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-modal" onClick={onClose}>
          &times;
        </button>
        <img src={service.image} alt={service.name} className="modal-image" />
        <div className="modal-content">
          <h2>{service.name}</h2>
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};



export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleModelClick = (service) => {
    openModal(service);
  };


  const handleButtonClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSffTQsBZwZizYfSGFD0EBk0wswkqi1sgmr5AeOi_xVymPT80w/viewform?embedded=true",
      "_blank"
    );
  };


  return (
    <div className="services-page">
      <Helmet>
        <title>Explore Our Services - Cograd Education Solutions</title>
        <meta
          name="description"
          content="Discover Cograd's innovative educational services including smart classes, school upgradation, and digitalising schools. Enhance your learning experience with our tailored solutions."
        />
      </Helmet>
      <Header />
      <h1>Cograd provides Services </h1>
      <div className="services-container">
        {servicesList.map((service, i) => (
          <div key={i} className="service-card">
            <div className="image-wrapper">
              <img
                src={service.image}
                alt={service.name}
                className="service-image"
              />
              <img
                src={service.image}
                alt={service.name}
                className="service-image overlapped"
              />
            </div>
            <div className="service-content">
              <span className="service-category">/Service</span>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
              <button className="learn-more-button"   onClick={() => handleModelClick(service)}>Learn More</button>
            </div>
          </div>
        ))}
      </div>
      <div className="collab-container">
        <div className="collab-content">
          <div className="collab-image">
            <img src={collab} alt="Upgrade your school" />
          </div>
          <div className="collab-text">
            <h2>Upgrade your school</h2>
            <p>
              Discover innovative solutions to elevate your educational
              institution with Cograd. We provide cutting-edge technology,
              personalized support, and tailored programs to enhance teaching,
              learning, and student outcomes.
            </p>
            <button onClick={handleButtonClick}>Contact Us for Collaboration</button>
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} service={selectedService} onClose={closeModal} />
      <Footer />
    </div>
  );
}
