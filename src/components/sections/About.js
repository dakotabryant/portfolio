import React from 'react';
import AboutImage from '../../assets/titles/about-title.svg';

const About = ({ aboutText }) => {
  return (
    <div className="about section">
      {/* <div class="horizontal-line" />
      <div class="horizontal-line" />
      <div class="horizontal-line" /> */}
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
    </div>
  );
};

export default About;
