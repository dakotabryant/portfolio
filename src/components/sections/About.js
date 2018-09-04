import React from 'react';
import AboutImage from '../../assets/titles/about-title.svg';
import { Link } from 'gatsby';
import { secondParagraph } from '../../content/copy';

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
          <p>{secondParagraph}</p>
          <Link to="/work">
            <button>Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
