import React, { useState } from "react";
import "./SuccessStories.scss";
import off1 from "../assets/key-offerings/school1.webp";
import off2 from "../assets/key-offerings/school2.webp";
import off3 from "../assets/key-offerings/school3.webp";
import child1 from "../assets/success-stories/ats-archana.webp"; // Import child images
import child2 from "../assets/success-stories/aman.webp";
import child3 from "../assets/success-stories/stu3.webp";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      backgroundImage: off1,
      childImage: child1, // Child image for story 1
      student: "Team ATS Karchhana",
      content:
        "Students from the Nurture program triumphed at IIT Bombay’s Tech Fest, securing an impressive 4th position. Their innovative project, developed through rigorous mentoring and teamwork, impressed judges and peers alike. This achievement highlighted their dedication and showcased the program’s effectiveness in fostering young talent and technical excellence.",
    },
    {
      id: 2,
      backgroundImage: off2,
      childImage: child2, // Child image for story 2
      student: "Aman & Arpit",
      content:
        "Two students from Cograd School showcased their innovative project at Vigyan Ghar, a prestigious Science Talent Show featuring 20 participants from across India. Their groundbreaking research on renewable energy impressed the judges, earning them first place and a scholarship. Their victory not only highlighted their talent but also put Cograd School on the national stage.",
    },
    // {
    //   id: 3,
    //   backgroundImage: off3,
    //   childImage: child3, // Child image for story 3
    //   student: "Rahul Mehta",
    //   content:
    //     "Rahul Mehta, once struggling with his studies, is now a successful data analyst. Our innovative teaching methods and his perseverance were key to his success. Rahul's transformation highlights the importance of supportive education systems.",
    // },
  ];

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const nextStory = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  return (
    <div
      className="success-story"
      style={{
        backgroundImage: `url(${stories[currentStoryIndex]?.backgroundImage})`,
      }}
    >
      <div className="story-content">
        <div className="student-name">
          <img
            src={stories[currentStoryIndex].childImage} // Display child image
            alt={stories[currentStoryIndex].student} // Alt text for accessibility
            className="child-image"
          />
          <h3>{stories[currentStoryIndex].student}</h3>
          {/* <span>Student</span> */}
        </div>
        <div className="story">
          <p>{stories[currentStoryIndex].content}</p>
        </div>

        <button className="next-story-button" onClick={nextStory}>
          Next Story
        </button>
      </div>
    </div>
  );
};

export default SuccessStories;
