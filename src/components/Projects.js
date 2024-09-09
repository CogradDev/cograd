import React from "react";
import "./Projects.scss";
import com1 from "../assets/Our-projects/nurture programme.webp";
import com2 from "../assets/Our-projects/ai-for-all.webp";
import com3 from "../assets/Our-projects/pm shri schools.webp";
import com4 from "../assets/Our-projects/dehradun officer training .webp";
import com5 from "../assets/Our-projects/dehradun c meet training .webp";
import com6 from "../assets/Our-projects/youth-skilling.webp";
import com7 from "../assets/Our-projects/nuture programme 2.webp";
import com8 from "../assets/Our-projects/ai-thinktank.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from "../assets/partners/l-ihfc.webp";
import logo2 from "../assets/partners/l-adobe.webp";
import logo3 from "../assets/partners/l-pmshree_11zon.webp";
import logo4 from "../assets/partners/l-siemt_11zon.webp";
import logo5 from "../assets/partners/l-ukEd.webp";
import logo6 from "../assets/partners/l-nasscom.webp";
import logo7 from "../assets/partners/l-thingqbator.webp";
import logo8 from "../assets/partners/l-fitt-iid_11zon.webp";

// Assuming you have imported project images
const projectData = [
  {
    id: 1,
    image: com1,
    alt: "Project 1",
    title: "Nurture Programme",
    description:
      "The Nurture Program empowers rural students through hands-on learning in Emerging Technologies, personalized mentoring, and skill development to foster future-ready talent in Bharat.",
    logo: logo1,
  },
  {
    id: 2,
    image: com2,
    alt: "Project 2",
    title: "Adobe AI for All",
    description:
      "At Adobe AI for All we designed Medha, that is an AI-powered platform to assist teachers in creating engaging, personalized learning experiences for every student in India.",
    logo: logo2,
  },
  {
    id: 3,
    image: com3,
    alt: "Project 3",
    title: "PM SHRI Schools",
    description:
      "Cograd supports PM SHRI schools in creating model institutions by fostering quality education, promoting innovation, and encouraging holistic development for students across India.",
    logo: logo3,
  },
  {
    id: 4,
    image: com4,
    alt: "Project 4",
    title: "Educational Officers Training",
    description:
      "Cograd's training for Block Education Officers (BEOs) in Uttarakhand enhances their skills in Generative AI, equipping them to implement innovative education strategies effectively.",
    logo: logo4,
  },
  {
    id: 5,
    image: com5,
    alt: "Project 5",
    title: "Teachers Training",
    description:
      "Cograd's SCERT Teachers' Training equips educators with AI, coding, and emerging tech skills, enhancing classroom learning and empowering teachers across Uttarakhand.",
    logo: logo5,
  },
  {
    id: 6,
    image: com6,
    alt: "Project 6",
    title: "Youth Skilling Programme",
    description:
      "The Nasscom Youth Skilling Program, in collaboration with Cograd, we trained 5000 young individuals in Data Science, AI, and emerging technologies, fostering future digital leaders.",
    logo: logo6,
  },
  {
    id: 7,
    image: com7,
    alt: "Project 7",
    title: "Thingqubator Community Engagement",
    description:
      "We onboarded 20000+ students on Cisco Thingqubator portal within a span of month. Those students have lifetime free access to new gen tech courses.",
    logo: logo7,
  },
  {
    id: 8,
    image: com8,
    alt: "Project 8",
    title: "AI Education ThinkTank",
    description:
      "AI Education ThinkTank 2024 at IIT Delhi was specially organised to solve education related problems through AI products and new gen tools.",
    logo: logo8,
  },
];

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrow: false,
    speed: 500,
    slidesToShow: 4, // Adjust the number of slides shown per screen
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="projects">
      <h2>Our Projects</h2>
      <div className="project-list">
        <Slider {...settings}>
          {projectData.map((project) => (
            <div key={project.id} className="project">
              <h3 className="project-title">{project.title}</h3>
              <img
                src={project.image}
                alt={project.alt}
                className="project-img"
              />
              <div className="project-details">
                <span>{project.description}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent:"center",
                  width: "100%",
                  height: 35,
                }}
              >
                <span
                  style={{
                    fontStyle: "italic",
                    color: "gray",
                    marginRight: 10,
                    marginTop: 10,
                    fontSize: 14,
                  }}
                >
                  In association with
                </span>
                <div style={{ width: "20%", height: "100%" }}>
                  <img src={project.logo} alt="" style={{height: "100%" }} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
