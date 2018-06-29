import React from 'react';
import socialMedia from '../content/social-media';

const Footer = () => {
  return (
    <div className="footer">
      <i id="pink-box" />
      <h2>I am currently only available for freelance projects.</h2>
      <div className="contact-icons">
        {socialMedia &&
          socialMedia.map(site => {
            return (
              <div key={site.text} className="icon-wrapper">
                <object data={site.path} type="image/svg+xml" />
                <p>{site.text}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Footer;
