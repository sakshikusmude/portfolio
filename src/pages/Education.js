import React from "react";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

const Education = () => {
  return (
    <motion.div 
      className="education-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="section-title">🎓 Education</h1>

      <div className="education-box">
        <FaUniversity className="edu-icon" />
        <div>
          <h3>Vishwakarma Institute of Information Technology</h3>
          <p>B.Tech in Information Technology (2022 - 2026)</p>
          <p>📊 CGPA: 8.11</p>
        </div>
      </div>

      <hr className="edu-separator" />

      <div className="education-box">
        <FaUniversity className="edu-icon" />
        <div>
          <h3>Residential Junior College</h3>
          <p>HSC - Science (2020 - 2022)</p>
          <p>📊 Percentage: 84.5%</p>
        </div>
      </div>

      <hr className="edu-separator" />

      <div className="education-box">
        <FaUniversity className="edu-icon" />
        <div>
          <h3>Savitribai Phule Madhyamik Vidyalaya, MPKV Rahuri</h3>
          <p>SSC (2020)</p>
          <p>📊 Percentage: 96.20%</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
