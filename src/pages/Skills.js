import React from "react";
import { motion } from "framer-motion";

const courseworkSkills = [
  "Data Structures & Algorithms", "OOPS Concept", "DBMS", "Machine Learning & Data Science",
  "UI/UX Designing", "Web Development", "Android Development", "Mainframe"
];

const technicalSkills = [
  "Java", "Python", "C", "C++", "JavaScript", "SQL"
];

const devTools = [
  "VS Code", "Android Studio", "Flask", "Postman", "IntelliJ IDEA", "Tableau"
];

const techFrameworks = [
  "Linux", "GitHub", "ReactJS", "Figma", "NodeJS", "Git"
];

const Skills = () => {
  return (
    <motion.div 
      className="skills-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="section-title">🛠 Skills</h1>

      {/* Coursework / Skills Section */}
      <div className="skills-section">
        <h2>📚 Coursework / Skills</h2>
        <div className="skills-grid">
          {courseworkSkills.map((skill, index) => (
            <motion.div key={index} className="skill-box" whileHover={{ scale: 1.1 }}>
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="skills-section">
        <h2>💻 Technical Skills</h2>
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <motion.div key={index} className="skill-box" whileHover={{ scale: 1.1 }}>
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Developer Tools Section */}
      <div className="skills-section">
        <h2>🛠 Developer Tools</h2>
        <div className="skills-grid">
          {devTools.map((tool, index) => (
            <motion.div key={index} className="skill-box" whileHover={{ scale: 1.1 }}>
              {tool}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technologies / Frameworks Section */}
      <div className="skills-section">
        <h2>🚀 Technologies & Frameworks</h2>
        <div className="skills-grid">
          {techFrameworks.map((tech, index) => (
            <motion.div key={index} className="skill-box" whileHover={{ scale: 1.1 }}>
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
      
    </motion.div>
  );
};

export default Skills;
