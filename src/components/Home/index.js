import React from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../../data/data.js';
import ProjectLink from '../Projects/ProjectLinks';
import PrevImage from './PrevImage'
const Home = () => {
  const projects = getProjects();
  // const tech = techList;
  return (
    <div className="con-h">
      <div className="circle-image"></div>
      <div className="container">
        <p>Hi, I'm Taylor.</p>
        <p>
          I'm a Full Stack Web Developer based near Boston, MA. I design and
          develop dynamic web applications, and games. This is a collection of my most recent{' '}
          <Link to="projects">
            <b>projects</b>.
          </Link>
        </p>
        <div className="more-link-container">
          <div>
            <Link className="more-link" to="about">
              About&nbsp;Taylor&#8250;
            </Link>
          </div>
        </div>
        <div className="mini-slide flex-row wrap">
          {projects.map((project) =>
            project.featured ? (
              <div key={project.id.toString()} className="flex-col">
                <Link to={`/projects/${project.id}`}>
                  <PrevImage project={project} imgClass={'mini-slider-img'} />
                </Link>
                <span className="mini-project-link-container">
                  <ProjectLink project={project} />
                </span>
                <Link to={`/projects/${project.id}`}>
                  <span className="mini-title">
                    <b>{project.title}</b>{' '}
                    {project.tagLine}
                  </span>
                </Link>
              </div>
            ) : null
          )}
          <div className="more-link-container">
            <Link className="more-link" to="/projects">
              More&nbsp;Projects &#8250;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
