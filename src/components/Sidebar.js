import React from "react";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import resume from "../assets/icons/cvHamzaNasri.pdf";
import Capture from "../assets/projects_images/Capture.PNG";
import { motion } from "framer-motion";
function Sidebar() {
  const hundelEmailMe = () => {
    window.open("mailto:hamzanasri16@gmail.com");
  };
  const sidebar_variant = {
    hidden: {
      x: "-200vh",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        dealy: 0.2,
        duration: 0.7,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={Capture} alt="avatar" className="sidebar-avatar" />
      <div className="sidebar-name">
        Hamza <span>Nasri</span>
      </div>
      <div className="sidebar-item sidebar-title"> Développeur Web</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar-item sidebar-resume">
          <img src={tie} alt="resume" className="sidebar-icon " /> Télecharger
          CV
        </div>
      </a>
      <div className="sidebar-social-icons my-2">
        <a href="https://www.linkedin.com/in/hamza-nasri-a3690614b/">
          <img src={Linkedin} alt="face" className="sidebar-icon mr-3" />
        </a>
        <a href="https://www.facebook.com/hamza.montana.nsr/">
          <img src={facebook} alt="Git" className="sidebar-icon" />
        </a>
      </div>
      <div className="sidebar-contact">
        <div className="sidebar-item sidebar-github">
          <a href="https://github.com/hamzanasri123/">
            <img src={github} alt="" className="sidebar-icon  mr-3" />
            github
          </a>
        </div>
        <div className="sidebar-location">
          <img src={pin} alt="" className="sidebar-icon mr-3" />
          Tunisia
        </div>
        <div className="sidebar-item">hamzanasri16@gmail.com</div>
        <div className="sidebar-item">+21696231966</div>
      </div>
      <div className="sidebar-item sidebar-email" onClick={hundelEmailMe}>
        Contact
      </div>
    </motion.div>
  );
}

export default Sidebar;
