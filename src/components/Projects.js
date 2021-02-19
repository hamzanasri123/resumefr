import React, { useState } from "react";
import data_projects from "./data/projects-data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
function Projects() {
  const [project, setProjects] = useState(data_projects);

  const hundelFilter = (name) => {
    const newarr = data_projects.filter((project) =>
      project.category.includes(name)
    );
  };
  const project_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        dealy: 0.2,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="container projects"
      variants={project_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="project-navbar">
        <div onClick={hundelFilter("reactjs")}>Reactjs</div>
        <div onClick={hundelFilter("javascript")}>Javascript</div>
        <div onClick={hundelFilter("redux")}>Nodejs </div>
        <div onClick={hundelFilter("mySql")}>Angular</div>
        <div onClick={hundelFilter("mySql")}>HTML5 CSS3</div>
      </div>
      <div className="row">
        {project.map((project) => (
          <ProjectCard key={project.name} projects={project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
