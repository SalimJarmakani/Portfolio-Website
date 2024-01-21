import React from "react";
import { Project } from "./Project";
import playIcon from "../../images/playstore.png";
import onlyGains from "../../images/dumbbell_icon.png";
import quizUp from "../../images/quiz up.png";
import Ecommerce from "../../images/cart.png";
import "./projects.css";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "PlayStore Clone",
      description: "Playstore Clone made with Asp.net Core and React",
      imagePath: playIcon,
      github: "https://github.com/SalimJarmakani/PlayStore",
    },
    {
      id: 2,
      title: "Only Gains",
      description: "Instagram clone made with FASTAPI and Kotlin",
      imagePath: onlyGains,
      github: "https://github.com/SalimJarmakani/OnlyGains",
    },
    {
      id: 3,
      title: "Quiz Up",
      description:
        "Trivia multiplayer Quiz game made with Flutter and Firebase",
      imagePath: quizUp,
      github: "https://github.com/Ghaadi/quizup",
    },

    {
      id: 4,
      title: "Ecommerce",
      description: "Ecommerce store made with React and Stripe",
      imagePath: Ecommerce,
      github: "https://github.com/SalimJarmakani/e-commerce",
    },
  ];

  return (
    <div className="container px-4">
      <h1 id="projects">Projects</h1>
      <div className="projects mt-5">
        <div className="row">
          {projectData.map((project) => (
            <Project key={project.id} projectData={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
