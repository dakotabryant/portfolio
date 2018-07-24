import React from 'react';
import socialMedia from '../content/social-media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <i id="pink-box" />
      <h2>I am currently only available for freelance projects.</h2>
      <div className="contact-icons">
        {socialMedia &&
          socialMedia.map(site => {
            return (
              <div key={site.text} className="icon-wrapper">
                <FontAwesomeIcon icon={site.icon} />
                <p>{site.text}</p>
              </div>
            );
          })}
      </div>
    </footer>
  );
};

export default Footer;
