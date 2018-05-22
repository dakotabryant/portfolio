import React from 'react';
import AboutImage from '../../assets/titles/about-title.svg';

const About = ({aboutText}) => {
  return (
    <div className="about">
      <img src={AboutImage} alt="About"/>
      <p>{aboutText}</p>
    </div>
  );
};

export default About;