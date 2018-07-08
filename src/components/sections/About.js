import React from 'react';
import AboutImage from '../../assets/titles/about-title.svg';

const About = ({ aboutText }) => {
  return (
    <div className="about section">
      <div className="content-wrapper">
        <object
          className="title-image"
          data={AboutImage}
          type="image/svg+xml"
        />
        <div className="copy-wrapper">
          <p>{aboutText}</p>
          <button>View My Work</button>
        </div>
      </div>
    </div>
  );
};

export default About;
