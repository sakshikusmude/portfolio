import React from "react";
import { motion } from "framer-motion";

const extracurricular = [
  {
    title: "Competitive Examination Cell, VIIT",
    role: "Assoc. Technical Head (2023-2024)",
    location: "Pune",
    description: "Led the technical team behind the scenes, managing presentations and overall event coordination.",
    link: "https://drive.google.com/file/d/1Uo_bTDo8rB4XcGWYcQkXb__JcoT0N_ss/view"
  },
  {
    title: "Smart India Hackathon (SIH)",
    role: "Participant",
    description: "Worked on an AI-powered learning platform.",
    link: "https://drive.google.com/file/d/1w4_SZRUjXjPyB_jwB2sT6-lGCaXzWhG0/view"
  },
  {
    title: "GeekVishwa Hackathon",
    role: "Participant",
    description: "Created an AI-powered nutrition Android app.",
    link: "https://drive.google.com/file/d/11TDfQbNJXs23oEmCb4ANlLKVzb4H7C3N/view"
  }
];

const certifications = [
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    link: "https://www.credly.com/badges/5f85d860-1c5e-4de6-8233-1306c5b8646d/public_url"
  },
  {
    title: "AWS Academy Graduate - Machine Learning Foundations",
    link: "https://www.credly.com/badges/18da67d1-bd27-4b1b-a0c6-18705990d1f9/public_url"
  },
  {
    title: "IBM Z Xplore - Advance",
    link: "https://www.credly.com/badges/ca259546-a9e4-43d3-b69e-58a3db1b4f79/public_url"
  },
  {
    title: "Introduction to Web Development (HTML, CSS, JavaScript) - IBM",
    link: "https://www.credly.com/badges/c09ba381-3d1e-452a-856f-449c2b17a1db/public_url"
  }
];

const Achievements = () => {
  return (
    <motion.div 
      className="achievements-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="section-title">🏆 Achievements</h1>

      {/* Extracurricular Activities Section */}
      <div className="achievements-section">
        <h2>🚀 Extracurricular Activities</h2>
        {extracurricular.map((item, index) => (
          <motion.div key={index} className="achievement-card" whileHover={{ scale: 1.05 }}>
            <h3>{item.title}</h3>
            <p><strong>{item.role}</strong> {item.location && `| ${item.location}`}</p>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">🔗 View Details</a>
          </motion.div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="achievements-section">
        <h2>📜 Certifications</h2>
        <ul className="certifications-list">
          {certifications.map((cert, index) => (
            <motion.li key={index} whileHover={{ scale: 1.05 }}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">{cert.title}</a>
            </motion.li>
          ))}
        </ul>
      </div>

    </motion.div>
  );
};

export default Achievements;
