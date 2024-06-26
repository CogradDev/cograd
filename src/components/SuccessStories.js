import React, { useState } from "react";
import "./SuccessStories.scss";
import off1 from "../assets/key-offerings/school1.webp";
import off2 from "../assets/key-offerings/school2.webp";
import off3 from "../assets/key-offerings/school3.webp";
import child1 from "../assets/success-stories/stu5.webp"; // Import child images
import child2 from "../assets/success-stories/stu2.webp";
import child3 from "../assets/success-stories/stu3.webp";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      backgroundImage: off1,
      childImage: child1, // Child image for story 1
      student: "Amrita Sharma",
      content:
        "After joining our program, Amit Sharma excelled in his studies and secured a position at a top IT company. His dedication and our comprehensive curriculum made this success possible. Amit's journey is a testament to how quality education can transform lives.",
    },
    {
      id: 2,
      backgroundImage: off2,
      childImage: child2, // Child image for story 2
      student: "Priya Verma",
      content:
        "Priya Verma's story is one of resilience and hard work. From a small town, she broke all barriers to become a software developer in a multinational corporation. Our program provided her with the necessary skills and confidence to achieve her dreams.",
    },
    {
      id: 3,
      backgroundImage: off3,
      childImage: child3, // Child image for story 3
      student: "Rahul Mehta",
      content:
        "Rahul Mehta, once struggling with his studies, is now a successful data analyst. Our innovative teaching methods and his perseverance were key to his success. Rahul's transformation highlights the importance of supportive education systems.",
    },
  ];

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const nextStory = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  return (
    <div
      className="success-story"
      style={{
        backgroundImage: `url(${stories[currentStoryIndex].backgroundImage})`,
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
          <span>Student</span>
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
