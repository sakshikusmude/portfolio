import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Xact Innovation",
    role: "UI/UX Design Intern",
    duration: "Jan 2025 - Present",
    details: "Designed web applications, created wireframes, and improved user experience."
  },
  {
    company: "JAASN Consultants LLC",
    role: "Data Science & Business Analytics Intern",
    duration: "Aug 2024 - Jan 2025",
    details: "Worked on predictive analytics, reducing marketing costs by 10-30%."
  }
];

const Experience = () => {
  return (
    <motion.div 
      className="experience-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="section-title">💼 Experience</h1>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="experience-box" 
            whileHover={{ scale: 1.05 }}
          >
            <div className="timeline-dot"></div>
            <div className="experience-content">
              <h3>{exp.role}</h3>
              <p><strong>{exp.company}</strong> | {exp.duration}</p>
              <p>{exp.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
