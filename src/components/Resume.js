import React from "react";
import react from "../assets/icons/react.svg";
import Bar from "./Bar";
import {motion} from "framer-motion"
const languages = [
  {
    name: "React Js",
    level: "70",
  },
  {
    name: "Angular 6 +",
    level: "60",
  },
  {
    name: "HTML5 CSS3 ",
    level: "90",
  },
  {
    name: "Nodejs ",
    level: "60",
  },
  {
    name: "Javascript",
    level: "70",
  },
  {
    name: "Asp net",
    level: "70",
  },
];

const tools = [
  {
    name: "git",
    level: "80",
  },
  {
    name: "wordpress",
    level: "90",
  },
  {
    name: "Rest API",
    level: "60",
  },
  {
    name: "Agile",
    level: "80",
  },
  {
    name: "UML-Merise",
    level: "80",
  },
  {
    name: "Mongodb-Mongoose",
    level: "60",
  },
];
 const resume_variant = {
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

function Resume() {
  return (
    <motion.div
      className="container-resume"
      variants={resume_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h2 className="resume-card-heading">Formation</h2>
          <div className="resume-card-body">
            <h5 className="resume-card-title">
              Formation Full-Stack Js{" "}
              <span className="date">Octobre 2020-Fevrier 2021</span>
            </h5>
            <p className="resume-card-name">Go-My-Code</p>
            <h5 className="resume-card-title">
              Diplôme National D’ingénieur en Informatique
              <span className="date">Octobre 2020-Fevrier 2021</span>
            </h5>
            <p className="resume-card-name">
              École Supérieure d'Ingénieurs Privée
            </p>
            <h5 className="resume-card-title">
              Licence Appliquée en technologie de l’informatique
              <span className="date">Octobre 2020-Fevrier 2021</span>
            </h5>
            <p className="resume-card-name">
              Institut Supérieur des Etudes Technologiques
            </p>
            <h5 className="resume-card-title">
              Lycée Secondaire Sened{" "}
              <span className="date">Octobre 2020-Fevrier 2021</span>
            </h5>
            <p className="resume-card-name"> Baccalauréat Mathématique</p>
            {/* <p className="resume-card-details">Hamza Nasri</p> */}
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h2 className="resume-card-heading">EXPERIENCE ET STAGES</h2>
          <div className="resume-card-body">
            <h5 className="resume-card-title">
              Développeur web, Intégrateur web
            </h5>
            <p className="resume-card-name">
              J’occupe actuellement le poste de développeur web-Intégrateur Web
              au sein de la société Webixia
            </p>
            <h5 className="resume-card-title">
              Stage Fin d’Étude au sein de la Banque de Tunisie
            </h5>
            <p className="resume-card-name">
              Conception et Développement d’un Système de Gestion des Dossiers
              Allocation Pour Voyage D’affaire
            </p>
            <h5 className="resume-card-title">
              Stage Technicien au sein de la scociété Smart-Tech
            </h5>
            <p className="resume-card-name">
              Réalisation de la conception et le développement d’une application
              de Gestion des Congés. (Java J2EE)
            </p>
            <h5 className="resume-card-title">
              Stage d’initiation au sein de Tunisie Telecom{" "}
            </h5>
            <p className="resume-card-name">
              Réalisation de la conception et le développement d’une application
              de Gestion des Congés. (Java J2EE)
            </p>
            {/*   <p className="resume-card-details">hamza</p> */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language-heading">Librairie et Framework</h5>
          <div className="resume-language-body">
            {languages.map((lg) => (
              <Bar value={lg} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language-heading">Tools</h5>
          <div className="resume-language-body">
            {tools.map((tl) => (
              <Bar value={tl} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
