import React from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../../data/data';
import ProjectLinks from './ProjectLinks';


const ProjectCards = () => {
  const projects = getProjects();
  return (
    <div className="project-cards">
      {projects.map((project) => (
        <div key={project.id.toString()} className="proj-card">
            <div className="proj-column">
          <Link to={`/projects/${project.id}`} alt={project.projectName}>
              <img
                src={`/images/preview/${project.images.prevImg}`}
                className="project-image"
                alt={project.projectName}
              />
          </Link>
              <ProjectLinks project={project}/>
              <span className="mini-title">
                <b>{project.title}</b> {project.tagLine}
              </span>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;


