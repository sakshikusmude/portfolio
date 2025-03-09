import React from "react";
import { motion } from "framer-motion";

const softwareProjects = [
  {
    title: "WorthUnzip - Android App",
    description: "Manages and analyzes assets, converting them to digital format.",
    techStack: "Kotlin, SQLite, Firebase",
    link: "#"
  },
  {
    title: "Data-Driven Marketing System",
    description: "Optimized marketing strategies using AI, reducing costs by 10-30%.",
    techStack: "Python, Machine Learning, Power BI",
    link: "#"
  },
  {
    title: "Medical Tourism with Chatbot",
    description: "AI-powered chatbot for medical service assistance.",
    techStack: "Flask, Python, NLP",
    link: "#"
  },
  {
    title: "Automated Email Sending",
    description: "A system to send bulk emails using Python and Flask, with a React frontend.",
    techStack: "Python, Flask, React, SMTP",
    link: "#"
  }
];

const uiuxProjects = [
  {
    title: "Provenzee - UI/UX Design",
    description: "A modern UI/UX design prototype created in Figma for Jewellery Ecommerce website.",
    link: "https://www.figma.com/proto/keWsGnszTcK29sKfE0R2Ig/PROVENZEE?node-id=1-2&starting-point-node-id=1%3A2&t=rvUTgwTgJupYwUuO-1"
  },
  {
    title: "MediCare - UI/UX Prototype",
    description: "Concept design for a web  app with a user-friendly experience for hospital.",
    link: "https://www.figma.com/proto/Yt9zoqjsluqxOL6pQZjC5H/Untitled?node-id=1-2&starting-point-node-id=1%3A2&t=jDNmBwvlOHmDgMrX-1"
  },
  {
    title: "Velour Essence - UI/UX Prototype",
    description: "A stylish and modern UI/UX design for a luxury brand.",
    link: "https://www.figma.com/proto/EbwuGfHD5aYgc16v9Y9pFP/VELOUR-ESSENCE?node-id=1-2&t=fkzDxT0NXybr5ej5-1"
  }
];

const Projects = () => {
  return (
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Software Development Projects Section */}
      <h1 className="section-title">📂 Software Projects</h1>
      <div className="projects-grid">
        {softwareProjects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card" 
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">🔗 View Project</a>
          </motion.div>
        ))}
      </div>

      {/* UI/UX Design Projects Section */}
      <h1 className="section-title">🎨 UI/UX Design Projects</h1>
      <div className="projects-grid">
        {uiuxProjects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card uiux-card" 
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">🔗 View Design</a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
