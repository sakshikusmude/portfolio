import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png"; // Import your image
import { Typewriter } from "react-simple-typewriter";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home-content">
        
        {/* Left Section - Text */}
        <div className="text-section">
          <h1 className="typing-text">
            <Typewriter
              words={["Hi! I'm Sakshi Kusmude."]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={70}
              delaySpeed={2000}
            />
          </h1>
          <p className="description">
            A passionate IT engineer with experience in UI/UX, Data Science, and Web Development.
          </p>
          {/* Contact Icons */}
          <div className="contact-icons">
            <a href="mailto:sakshikusmude699@gmail.com"><FaEnvelope /></a>
            <a href="https://linkedin.com/in/sakshikusmude" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/sakshikusmude" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="image-section">
          <img src={profile} alt="Sakshi Kusmude" className="profile-image" />
        </div>
        
      </div>
    </motion.div>
  );
};

export default Home;
