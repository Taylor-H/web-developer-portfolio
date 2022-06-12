import React from 'react';
// import { Link } from 'react-router-dom';
import { AiFillGithub, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">
      <a href="mailto: taylor@htmlartist.net" target="_blank" rel="noopener noreferrer" id="mailto" alt="email me">
        <div>
          <AiOutlineMail />
        </div>
      </a>
      <a id="linkedin-link" target="_blank" href="http://www.linkedin.com/in/taylor-hembree-pell"
        alt="my linked in profile" rel="noopener noreferrer">
        <div>
          <AiOutlineLinkedin />
        </div>
      </a>
      <a id="github-link" target="_blank" href="https://github.com/Taylor-H" alt="Link to my github."
  rel="noopener noreferrer">
        <div>
          <AiFillGithub />
        </div>
      </a>
    </div>
  );
};
export default Footer;
