import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="navbar">
      <motion.h2 
        className="navbar-logo"
        whileHover={{ scale: 1.1, color: "#FFD700" }} // Name Animation
        transition={{ type: "spring", stiffness: 300 }}
      >
        Sakshi Kusmude
      </motion.h2>
      <ul>
        {[
          { path: "/", name: "Home" },
          { path: "/about", name: "About" },
          { path: "/education", name: "Education" },
          { path: "/skills", name: "Skills" },
          { path: "/projects", name: "Projects" },
          { path: "/experience", name: "Experience" },
          { path: "/achievements", name: "Achievements" },
          { path: "/contact", name: "Contact" },
          { path: "/gallery", name: "Gallery" }
        ].map((item, index) => (
          <motion.li 
            key={index} 
            whileHover={{ scale: 1.1, color: "#06D6A0" }} // Menu Hover Effect
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link to={item.path}>{item.name}</Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
