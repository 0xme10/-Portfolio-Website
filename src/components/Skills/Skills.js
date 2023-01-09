import React from "react";
import "./Skills.css";
import cplus from "../../images/icons/c++-icon.svg";
import python from "../../images/icons/python-icon.svg";
import javascript from "../../images/icons/javascript-icon.svg";
import html5 from "../../images/icons/html-5-icon.svg";
import css from "../../images/icons/css-icon.png";
import reactjs from "../../images/icons/react-icon.svg";
import mysql from "../../images/icons/mysql-icon.svg";
import linux from "../../images/icons/linux-icon.png";
import windows from "../../images/icons/windows-icon.svg";
import vscode from "../../images/icons/visual-studio-code-icon.svg";
import git from "../../images/icons/git-icon.svg";
import redux from "../../images/icons/redux-icon.svg";
import DSP from "../../images/icons/DSP.svg";
import DSD from "../../images/icons/DSD.svg";
import MATLAB from "../../images/icons/matlab-icon.svg";

const Skills = () => {
  return (
    <section className="skillsSection" id="Skills">
      <div className="skillsContainer">
        <h1 className="skillsHeader">My Skills</h1>
        <div className="skillsCollection">
          <ul className="skillGrid">
            <li>
              <div className="skillItemContainer">
                <img src={cplus} alt="C++"></img>
                <p>C++</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={python} alt="Python"></img>
                <p>Python</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={MATLAB } alt="MATLAB "></img>
                <p>Matlab</p>
              </div>
            </li>
            <li>
              
              <div className="skillItemContainer">
                <img src={javascript} alt="Javascript"></img>
                <p>Javascript</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={html5} alt="HTML"></img>
                <p>HTML</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={css} alt="CSS"></img>
                <p>CSS</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={reactjs} alt="ReactJS"></img>
                <p>ReactJS</p>
              </div>
            </li>
            <li>
              
              <div className="skillItemContainer">
                <img src={mysql} alt="MySQL"></img>
                <p>MySQL</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={linux} alt="Linux"></img>
                <p>Linux</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={windows} alt="Windows"></img>
                <p>Windows</p>
              </div>
            </li>
            <li>
           
              <div className="skillItemContainer">
                <img src={vscode} alt="VScode"></img>
                <p>VSCode</p>
              </div>
            </li>
            <li>
              
              <div className="skillItemContainer">
                <img src={git} alt="Git"></img>
                <p>Git</p>
              </div>
            </li>
            <li>
   <div className="skillItemContainer">
                <img src={DSP} alt="DSP"></img>
                <p>DSP</p>
              </div>
            </li>
            <li>
<div className="skillItemContainer">
                <img src={DSD} alt="DSD"></img>
                <p>Digital System Design</p>
              </div>
            </li>
            <li>

            </li>
          </ul>
        </div>
      </div>
    </section> 
        
        
    
    
  );
};

export default Skills;
