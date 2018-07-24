import React from 'react';
import AboutImage from '../../assets/titles/about-title.svg';

const About = ({ aboutText }) => {
  return (
    <section className="about section">
      <div className="separator" />
      <div className="separator reverse" />

      <div className="content-wrapper">
        <object
          aria-label="About"
          className="title-image"
          data={AboutImage}
          type="image/svg+xml"
        />
        <div className="copy-wrapper">
          <p>{aboutText}</p>
          <button>View My Work</button>
        </div>
      </div>
    </section>
  );
};

export default About;
