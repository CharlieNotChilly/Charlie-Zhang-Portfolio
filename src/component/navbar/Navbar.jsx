import React from 'react';
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Charlie Dev
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/charliezhangck"><img src="/download.png" alt="Linkedin" /></a>
          <a href="https://www.instagram.com/charlielielyly/"><img src="/instagram.png" alt="Instagram" /></a>
          <a href="https://www.tiktok.com/@charliefitnesstraining"><img src="/tiktok.png" alt="Tik Tok" /></a>
          <a href="https://github.com/CharlieNotChilly?tab=repositories"><img src="/github1.jpeg" alt="Git Hub" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
