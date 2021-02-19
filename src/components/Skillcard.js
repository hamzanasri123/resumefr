import React from "react";

const Skillcard = ({ el: { icon, title, about } }) => (
  <div className="col-lg-6">
    <div className="skill-card">
      <img src={icon} alt="icons" className="skill-card-icon" />
      <div className="skill-card-body">
        <h6 className="skill-card-title">{title}</h6>
        <p className="skill-card-content">{about} </p>
      </div>
    </div>
  </div>
);
export default Skillcard;
