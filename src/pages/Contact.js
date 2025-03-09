import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="section-title">📞 Contact Me</h1>
      
      <div className="contact-info">
        <p><FaEnvelope className="contact-icon" /> Email: <a href="mailto:sakshikusmude699@gmail.com">sakshikusmude699@gmail.com</a></p>
        <p><FaPhone className="contact-icon" /> Phone: <a href="tel:+918080613066">8080613066</a></p>
      </div>

      <div className="contact-icons">
        <a href="mailto:sakshikusmude699@gmail.com"><FaEnvelope /></a>
        <a href="https://linkedin.com/in/sakshikusmude" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/sakshikusmude" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
      
    </motion.div>
  );
};

export default Contact;
