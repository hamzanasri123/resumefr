import React from "react";
import api from "../assets/icons/api.svg";
import dev from "../assets/icons/dev.svg";
import git from "../assets/icons/github.svg";
import backend from "../assets/icons/backend.svg";
import terminal from "../assets/icons/terminal.svg";
import tools from "../assets/icons/tools.svg";
import Skillcard from "./Skillcard";
import { motion } from "framer-motion";
function About() {
  const skills = [
    {
      icon: git,
      title: "Version Control",
      about:
        "Les systèmes de contrôle de version sont une catégorie d'outils de développement qui aident une équipe de développement à gérer les changements apportés au code source au fil du temps.  ",
    },
    {
      icon: api,
      title: "Command Line",
      about:
        "Angular-Cli est un outil en ligne de commande puissant qui va vous permettre de créer un projet contenant un ensemble plus que complet d'outils en vogue dans le monde JavaScript.",
    },
    {
      icon: tools,
      title: "Building and Automation Tools/WEB Performance",
      about:
        "les développeurs front-end sont confrontés au quotidien au défi d’exécuter des processus récurrents comme la compilation des feuille de style des préprocesseurs (Less, Sass, SCSS) en CSS ",
    },
    {
      icon: terminal,
      title: "DevTools ",
      about:
        "La console JavaScript est un outil pour déboguer du code JavaScript qui ne fonctionne pas comme on le souhaite. Elle permet d'exécuter des lignes de JavaScript sur la page et de rapporter les erreurs rencontrées lorsque le navigateur exécute le code",
    },
    {
      icon: backend,
      title: "Testing/Debugging",
      about:
        "Le testeur QA doit dans tous les cas avoir des compétences créatives et développer une fine analyse des comportements des utilisateurs pour les imiter au mieux dans ses tests. Cela demande donc une approche à la fois technique et psychologique  ",
    },
    {
      icon: dev,
      title: "Responsive Design",
      about:
        "Le Responsive Web design est une approche de conception Web qui vise à l'élaboration de sites offrant une expérience de lecture et de navigation optimales pour l'utilisateur quelle que soit sa gamme d'appareil (mobiles, tablettes).  ",
    },
  ];
  const about_variant = {
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
    <div className="about">
      <motion.h6
        className="about-inner"
        variants={about_variant}
        initial="hidden"
        animate="visible"
      >
        Je suis <span className="name">Hamza Nasri</span> développeur Web,
        intégrateur Web, développeur WordPress et Webdesigner.Tout simplement,
        Je suis «Full-Stack Web Developer» qui aime le Digital Art et IT. Dans
        ce domaine, la personne peut imaginer et concevoir des objets ou des
        scénarios. Il peut les rendre réelles, soit avec le Design (Photoshop, ,
        Gimp, Sketch …) ou avec le Coding (HTML5, CSS3, Javascript, ReactJs,
        CodeIgniter,Angular WordPress …). Je ne vais pas citer toutes les
        technologies que je connais ou que j’utilise en tant que développeur
        Web. Puisque c’est juste pour mentionner un peu du tout après des années
        de développement Web et de Webdesign. Vous pouvez télécharger mon CV ou
        visitez mon Portfolio pour découvrir plus à propos de moi.
      </motion.h6>
      <motion.div
        className="container about-container"
        variants={about_variant}
        initial="hidden"
        animate="visible"
      >
        <h6 className="about-heading">Mes outils</h6>
        <div className="row">
          {skills.map((el) => (
            <Skillcard el={el} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default About;
