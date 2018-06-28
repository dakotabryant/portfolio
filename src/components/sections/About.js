import React from 'react';
import AboutImage from '../../assets/titles/about-title.svg';

const About = ({ aboutText }) => {
  return (
    <div className="about section">
      <img className="title-image" src={AboutImage} alt="About" />
      <p>{aboutText}</p>
      <button>View My Work</button>
    </div>
  );
};

export default About;
