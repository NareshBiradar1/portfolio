import React from 'react';
import './ProjectCard.css';
import {  FaGithub} from 'react-icons/fa'; // Importing the icons


const ProjectCard = ({ name, description, technologies, githubUrl }) => {
  return (
    <div className="project-card">
      <h3 className="project-name">{name}</h3>
      <p className="project-description">{description}</p>
      <ul className="project-technologies">
        {technologies.map((tech, index) => (
          <li key={index} className="project-technology">{tech}</li>
        ))}
      </ul>
      <div className="project-github">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
      </div>
    </div>
  );
};

export default ProjectCard;
