import React from 'react';
import projectsData from './projects.json'; // Adjust the path as necessary
import ProjectCard from './ProjectCard';
import './ProjectPage.css'; // Import the CSS file

const ProjectsPage = () => {
  const projectCards = [];

  for (let i = 0; i < projectsData.length; i++) {
    projectCards.push(
      <ProjectCard
        key={i}
        name={projectsData[i].name}
        description={projectsData[i].description}
        technologies={projectsData[i].technologies}
        githubUrl={projectsData[i].githubUrl}
      />
    );
  }

  return (
    <div className="projects-page">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-grid">
        {projectCards}
      </div>
    </div>
  );
};

export default ProjectsPage;
