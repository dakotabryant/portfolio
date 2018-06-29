import React from 'react';
import AboutImage from '../../assets/titles/about-title.svg';

const About = ({ aboutText }) => {
  return (
    <div className="about section">
      <object className="title-image" data={AboutImage} type="image/svg+xml" />
      <p>{aboutText}</p>
      <button>View My Work</button>
    </div>
  );
};

export default About;
