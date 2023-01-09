import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import * as constants from "../../constants/constants";
import covidData from "../../images/projectHeaders/covidData.jpg";
import EMOGO from "../../images/projectHeaders/EMOGO.png";
import DTMF  from "../../images/projectHeaders/DTMF.jpg";
import RDBMS from "../../images/projectHeaders/RDBMS.png";
import PORTFOLIO from "../../images/projectHeaders/PORTFOLIO.png";

const Projects = () => {
  return (
    <section className="projectsSection" id="Projects">
      <div className="projectsIntroContainer">
        <h1 className="projectsHeader">My Projects</h1>
        <p className="projectsDisclaimer">
          Here is a collection of notable projects that I have worked on over
          the years. 
        </p>
      </div>
      <div className="projectsContainer">
       
        <ProjectCard
          name={constants.COVID_MINING_NAME}
          description={constants.COVID_MINING_DESCRIPTION1}
          picture={covidData}
          tech={constants.COVID_MINING_TECH}
          url={constants.COVID_MINING_GITHUB_LINK}
        />
         <ProjectCard
          name={constants.PORTFOLIO_NAME}
          description={constants.PORTFOLIO_DESCRIPTION1}
          picture={PORTFOLIO}
          tech={constants.PORTFOLIO_TECH}
          url={constants.PORTFOLIO_GITHUB_LINK}
        /> <ProjectCard
          name={constants.EMOTION_DETECTION_NAME}
          description={constants.EMOTION_DETECTION_DESCRIPTION1}
          picture={EMOGO}
          tech={constants.EMOTION_DETECTION_TECH}
          url={constants.EMOTION_DETECTION_GITHUB_LINK}
        /> <ProjectCard
          name={constants.DTMF_TONES_NAME}
          description={constants.DTMF_TONES_DESCRIPTION1}
          picture={DTMF}
          tech={constants.DTMF_TONES_TECH}
          url={constants.DTMF_TONES_GITHUB_LINK}
        /> <ProjectCard
          name={constants.BOOKSTORE_DESIGN_NAME}
          description={constants.BOOKSTORE_DESIGN_DESCRIPTION1}
          picture={RDBMS}
          tech={constants.BOOKSTORE_DESIGN_TECH}
          url={constants.BOOKSTORE_DESIGN_GITHUB_LINK}
        />
      </div>
    </section>
  );
};

export default Projects;
