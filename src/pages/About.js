import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaUniversity } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <h1 className="about-title">About Me</h1>

      {/* Personal Info Section */}
      <motion.div 
        className="info-box"
        whileHover={{ scale: 1.05 }}
      >
        <h2>Sakshi Kusmude</h2>
        <p className="typing-effect">
          <Typewriter
            words={[
              "I am a 3rd-year BTech student in IT, with a strong foundation in Java, Python, and C++.",
              "Recently completed Data Structures and Algorithms using Java.",
              "Eagerly expanding my skill set by exploring Java and data science.",
              "Passionate about problem-solving, coding, and UI/UX designing.",
              "Excited to contribute to tech innovations and open to learning and collaborating."
            ]}
            loop={0} // Infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </p>
        <div className="contact-icons">
          <a href="mailto:sakshikusmude699@gmail.com"><FaEnvelope /></a>
          <a href="https://linkedin.com/in/sakshikusmude" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/sakshikusmude" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
