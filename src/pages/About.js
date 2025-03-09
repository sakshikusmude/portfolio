import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      className="page about"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>About Me</h1>
      <p>I'm a 3rd-year B.Tech IT student passionate about coding, UI/UX, and data science.</p>
      <p>Currently learning Java, Python, and React.</p>
    </motion.div>
  );
};

export default About;
