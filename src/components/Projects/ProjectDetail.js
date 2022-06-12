import React from 'react';
import { useParams } from 'react-router-dom';
import { getProjects } from '../../data/data';
import FourOFour from '../FourOFour';
import ItemList from '../ItemList';
import ProjectLinks from './ProjectLinks';
import { NodeJS, Javascript, HTML5, CSS, ExpressIcon, FaGithubIcon, HerokuIcon, SequelizeIcon, SchemaIcon, ReactJS, ReduxIcon } from "../Styled/index.js";


const ProjectDetail = () => {
  const projects = getProjects();
  const techIcons = {
    node: <NodeJS />,
    html5: <HTML5 />,
    css3: <CSS />,
    javascript: <Javascript />,
    express: <ExpressIcon />,
    git: <FaGithubIcon />,
    heroku: <HerokuIcon />,
    sequelize: <SequelizeIcon />,
    postgresql: <SchemaIcon />,
    reactJS: <ReactJS />,
    redux: <ReduxIcon />,
  };
  let params = useParams();
  console.log('params', params);
  const projectId = params.projectId;

  const project = projects.find((project) => {
    console.log('projectId', typeof projectId, projectId);
        console.log(
          'project.id',
          typeof project.id.toString(),
          project.id.toString()
        );

    console.log('project.id === projectId?', project.id.toString() === projectId);
    return (
      project.id.toString() === projectId ? project : null);
  });
  return project ? (
    <div className="con-h">
      <div className="single-project">
        <div className="column">
          <div className="row">
            <img
              src={`/images/preview/${project.images.prevImg}`}
              alt={project.title}
              className="project-image"
            />
          </div>
          <div className="slide-header">
            <h1>{project.title}</h1>
            <div className="project-link-container">
              <ProjectLinks project={project} />
            </div>
          </div>
          <div className="feature-section">
            <div className="top-row">
            <ItemList itemList={project.features} />
              <p className="mini-slide-text">{project.description}</p>
            </div>
            {project.design ? (
              <p className="mini-slide-text">{project.design}</p>
            ) : null}
          </div>
          <div className="icon-row">
            {project.tech.map((item) =>
              techIcons[item] ? (
                <div key={item} alt={item}>
                  {techIcons[item]}
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <FourOFour />
  );
};
export default ProjectDetail;
