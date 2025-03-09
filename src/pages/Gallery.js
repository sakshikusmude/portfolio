import React from "react";
import { motion } from "framer-motion";
import imgIndustry from "../assets/industry.jpg";
import imgHackathon1 from "../assets/geekvishwa1.jpg";
import imgHackathon2 from "../assets/geekvishwa2.jpg";
import imgHackathon3 from "../assets/geekvishwa3.jpg";
import imgSIH from "../assets/sih.jpg";
import imgWorkshop1 from "../assets/workshop1.jpg";
import imgWorkshop2 from "../assets/workshop2.jpg";
import imgWorkshop3 from "../assets/workshop3.jpg";
import imgTrekSinhgad from "../assets/trek_sinhgad.jpg";
import imgTrekPurandar from "../assets/trek_purandar.jpg";
import imgCEC1 from "../assets/cec1.jpg";
import imgCEC2 from "../assets/cec2.jpg";
import imgCEC3 from "../assets/cec3.jpg";
import imgCEC4 from "../assets/cec4.jpg";
import imgCEC5 from "../assets/cec5.jpg";
import imgNSS from "../assets/nss.jpg";

const gallerySections = [
  {
    title: "🏭 Industry Visit - Fluid Controls Limited",
    single: true,
    images: [{ src: imgIndustry, description: "Industry visit for our project at Fluid Controls Limited." }]
  },
  {
    title: "💻 GeekVishwa Hackathon",
    images: [
      { src: imgHackathon1, description: "Our team at GeekVishwa Hackathon." },
      { src: imgHackathon2, description: "Working late-night on our project." },
      { src: imgHackathon3, description: "Final pitch presentation at GeekVishwa." }
    ]
  },
  {
    title: "🏆 Smart India Hackathon (SIH)",
    single: true,
    images: [{ src: imgSIH, description: "Competing at the Smart India Hackathon." }]
  },
  {
    title: "🔧 Mechanical Workshop (First Year)",
    images: [
      { src: imgWorkshop1, description: "Hands-on experience in the workshop." },
      { src: imgWorkshop2, description: "Learning mechanical tools & techniques." },
      { src: imgWorkshop3, description: "Group project from our workshop class." }
    ]
  },
  {
    title: "⛰️ Treks - Sinhgad & Purandar",
    images: [
      { src: imgTrekSinhgad, description: "Enjoying the sunrise from Sinhgad Fort." },
      { src: imgTrekPurandar, description: "A beautiful view from Purandar Fort." }
    ]
  },
  {
    title: "🎭 CEC Activities",
    images: [
      { src: imgCEC1, description: "Coordinating a CEC event." },
      { src: imgCEC2, description: "Teamwork at its best!" },
      { src: imgCEC3, description: "Conducting a technical workshop." },
      { src: imgCEC4, description: "Behind-the-scenes of a major event." },
      { src: imgCEC5, description: "Guiding students through a CEC activity." }
    ]
  },
  {
    title: "🤝 NSS - Supporting Orphan Children",
    single: true,
    images: [{ src: imgNSS, description: "Encouraging orphan children backstage before their performance." }]
  }
];

const Gallery = () => {
  return (
    <motion.div 
      className="gallery-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="section-title">🖼️ Gallery</h1>
      
      {gallerySections.map((section, index) => (
        <div key={index} className="gallery-section">
          <h2>{section.title}</h2>
          <div className={section.single ? "gallery-single" : "gallery-grid"}>
            {section.images.map((image, imgIndex) => (
              <motion.div key={imgIndex} className={section.single ? "gallery-single-item" : "gallery-item"} whileHover={{ scale: 1.05 }}>
                <img src={image.src} alt={section.title} className={section.single ? "gallery-single-image" : "gallery-image"} />
                <div className="gallery-description">
                  <p>{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Gallery;
