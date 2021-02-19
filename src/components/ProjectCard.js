import React from "react";
import git from "../../src/assets/icons/github.svg"
function ProjectCard({ projects: { name, image, githubUrl } }) {
  return (
    <div className="project-card col-md-6 col-lg-4 my-2">
      <figure className="project-card-wrapper">
        <a href={githubUrl}>
          <img src={image} alt={name} className="project-card-image" />
        </a>
        <div className="project-card-title">
          <a href={githubUrl}>
            <img src={git} alt="" className="project-card-icon" />
          </a>
          <h5>{name}</h5>
        </div>
      </figure>
    </div>
  );
}

export default ProjectCard;
