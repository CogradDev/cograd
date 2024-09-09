import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState } from "react";
import img1 from "../assets/services/cograd-school_11zon.webp";
import img2 from "../assets/services/school5.webp";
import img3 from "../assets/services/Dream lab_11zon.webp";
import img4 from "../assets/services/digitalised-school_11zon.webp";
import img5 from "../assets/services/capacity-building_11zon.webp";
import img6 from "../assets/services/content-curriculum_11zon.webp";
import collab from "../assets/image 13.webp";
import "./Services.scss";

const servicesList = [
  {
    name: "Cograd School",
    description:
      "Upgrade your school to Cograd School where we provide end-to-end solutions for schools, including curriculum development, teacher training, and AI integration. It empowers educational institutions to adopt innovative technologies, improve teaching standards, and create impactful learning experiences for students in rural and urban areas.",
    image: img1,
  },
  {
    name: "Medha AI Based Smart Classes",
    description:
      "Medha AI Based Smart Classes, a service of Cograd, is revolutionizing education by integrating AI-driven tools into classrooms, enhancing teaching methods, personalized learning, and efficient classroom management, ensuring quality education access for students and empowering teachers.",
    image: img2,
  },
  {
    name: "Dream Labs",
    description:
      "Dream Labs, a Cograd initiative, brings New Gen Technology Labs to schools, offering hands-on learning in AI, robotics, coding, and more. These labs foster innovation, creativity, and practical skills, empowering students to excel in emerging technologies and future careers.",
    image: img3,
  },
  {
    name: "Digitalising Schools",
    description:
      "Digitally transform your educational institution with our digitalization services. From administrative processes to curriculum delivery, we streamline operations, improve access to resources, and enhance overall efficiency through AI powered LMS and ERP software.",
    image: img4,
  },
  {
    name: "Capacity Building",
    description:
      "Cograd’s Capacity Building service for teachers aligns with the National Curriculum Framework 2023 (NCF) and National Education Policy 2020 (NEP). It focuses on upskilling educators in innovative pedagogies, emerging technologies, and AI tools, fostering inclusive, future-ready education in schools across India.",
    image: img5,
  },
  {
    name: "Content & Curriculum",
    description:
      "Cograd’s Content & Curriculum Development service for schools aligns with NCF and NEP guidelines, offering customized, future-ready learning materials. It integrates emerging technologies, critical thinking, and 21st-century skills to foster holistic development, inclusivity, and innovation in education.",
    image: img6,
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
