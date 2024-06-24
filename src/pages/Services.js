import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import img1 from "../assets/aw1.webp";
import img2 from "../assets/aw2.webp";
import img3 from "../assets/aw3.webp";
import img4 from "../assets/aw4.webp";
import img5 from "../assets/aw5.webp";
import collab from "../assets/image 13.webp";
import "./Services.scss";

const servicesList = [
  {
    name: "School Upgradation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ipsum a quis metus porta. Dictum nunc at vitae vitae condimentum mauris aliquam. Lorem ipsum dolor sit amet consectetur. Ipsum a quis metus porta. Dictum nunc at vitae vitae condimentum mauris aliquam.",
    image: img1,
  },
  {
    name: "Smart Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ipsum a quis metus porta. Dictum nunc at vitae vitae condimentum mauris aliquam. Lorem ipsum dolor sit amet consectetur. Ipsum a quis metus porta. Dictum nunc at vitae vitae condimentum mauris aliquam.",
    image: img2,
  },
  {
    name: "Smart Labs / Dream Lab",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ipsum a quis metus porta. Dictum nunc at vitae vitae condimentum mauris aliquam. Lorem ipsum dolor sit amet consectetur. Ipsum a quis metus porta. Dictum nunc at vitae vitae condimentum mauris aliquam.",
    image: img3,
  },
  {
    name: "Digitalising Schools",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ipsum a quis metus porta. Dictum nunc at vitae vitae condimentum mauris aliquam. Lorem ipsum dolor sit amet consectetur. Ipsum a quis metus porta. Dictum nunc at vitae vitae condimentum mauris aliquam.",
    image: img4,
  },
  {
    name: "Smart Labs / Dream Lab",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ipsum a quis metus porta. Dictum nunc at vitae vitae condimentum mauris aliquam. Lorem ipsum dolor sit amet consectetur. Ipsum a quis metus porta. Dictum nunc at vitae vitae condimentum mauris aliquam.",
    image: img5,
  },
];

export default function Services() {
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
              <button className="learn-more-button">Learn More</button>
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
            <button>Contact Us for Collaboration</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
