import React from 'react';
import { NewTab, GithubIconSmall, FaGithubIcon } from '../Styled';

const ProjectLinks = (props) => {
  const { project } = props;
  return (
    <>
      <div className="link-box">
        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
          Live&nbsp;
          <NewTab />
        </a>
      </div>
      <div className="link-box">
        <a
          href={project.links.gitHub}
          target="_blank"
          rel="noopener noreferrer"
          alt={`${project.title} repo on github`}>
          Github&nbsp;
          <GithubIconSmall />
        </a>
      </div>
      {project.links.optLink ? (
        <div className="link-box">
          <a
            href={project.links.optLink}
            target="_blank"
            rel="noopener noreferrer"
            alt={`${project.title} repo on github`}>
            Github&nbsp;Wiki&nbsp;
            <FaGithubIcon />
          </a>
        </div>
      ) : null}
    </>
  );
};
export default ProjectLinks;
