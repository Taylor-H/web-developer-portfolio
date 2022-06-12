import React from 'react';
import { Link } from 'react-router-dom';
import rioport from '../../images/preview/rioport-big.jpg';
import mtv from '../../images/preview/mtv-big.jpg';
import vh1 from '../../images/preview/vh1-big.jpg';
const About = () => {
  return (
    <ul className="prof">
      <li className="flex-item one">
        <div className="para">
          <h5 id="detail-header">Web Developer Back Story</h5>
          <p className="summary-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="summary-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </li>
      <li className="flex-item one">
        <div className="photo1">
          <img src={rioport} alt="rioport preview" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </li>
      <li className="flex-item two">
        <div className="photo-small">
          <img src={mtv} alt="mtv preview" />
          <img src={vh1} alt="vh1 preview" />
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </li>
      <li className="flex-item one">
        <div className="para">
          <h5 id="detail-header">Things got real.</h5>
          <p className="summary-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </li>
      <li className="flex-item one">
        <div className="para">
          <h5 id="detail-header">My Journey</h5>
          <p className="summary-text">
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </li>
      <li className="flex-item one">
        <div className="photo1">
          {/* <img src="images/port6.jpg" className="head-shot"/>  */}
        </div>
      </li>
      <li className="flex-item two">
        <div className="photo1">
          {/* <img src="images/port6.jpg" className="head-shot"/>  */}
        </div>
      </li>
      <li className="flex-item one">
        <div className="para">
          <p className="summary-text">
            Later I moved to a prominent position at
            <a href="https://en.wikipedia.org/wiki/RioPort">
              the first internet music service (cloud service) to legally offer
              digital songs from all the major music labels
            </a>
            ". Rioport's main product was a precursor to iTunes * . This was the
            most exciting and technically challenging role for me yet. I worked
            closely with our in-house graphic designers and designers from
            companies like Nike, and MTV to rebrand Rioport's app and content to
            their specific design and use. Working with design, engineering and
            marketing integrate graphics, data, and HTML/CSS for the web browser
            and then optimizing the final product was my main role. Additionally
            I worked with marketing to set up scheduled press releases,
            promotional pages, and content updates on the corporate marketing
            side of the site.
          </p>
        </div>
      </li>
      <li className="flex-item one">
        <div className="para">
          <h5 id="detail-header">Currently</h5>
          <p className="summary-text">
            The seven or so years of prior Front End experience was not for
            nothing. The interpersonal and communication skills I gained from
            that experience are certainly still relevant. Working on a team and
            being able to translate technical concepts to non technical team
            mates is always going to be a useful skill. I may have had to learn
            a lot of new technologies to be able to make modern web apps but it
            was so worth it. It's a great feeling to be able to create something
            that actually does something. Something that improves peoples lives
            and helps them to achieve their goals. It's a great feeling to be
            able to say I'm a Full Stack Software developer.
          </p>
        </div>
      </li>
      <li className="flex-item one">
        <div className="photo1">
          {/* <img src="images/port6.jpg" className="head-shot"/>  */}
        </div>
      </li>
      <li className="flex-item">
        <div className="photo1">
          {/* <img src="images/port6.jpg" className="head-shot"/>  */}
        </div>
      </li>
      <li className="flex-item">
        <div className="para">
          <p className="summary-text">
            I currently live near Boston with my family, our cat, and an
            extremely energetic dog. You can find me parenting and developing
            software most of the time. In my downtime I like to do ceramics,
            silk screen printing, and abstract acrylic painting.
          </p>
        </div>
      </li>
    </ul>
  );
};

export default About;
