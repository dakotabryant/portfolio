import React, { Component } from 'react';
import socialMedia from '../content/social-media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import Scroll from 'react-scroll';

class Footer extends Component {
  clickHandler = () => {
    Scroll.animateScroll.scrollToTop();
  };
  render() {
    return (
      <footer className="footer">
        <i id="pink-box" onClick={this.clickHandler} />
        <h2>I am currently only available for freelance projects.</h2>
        <div className="contact-icons">
          {socialMedia &&
            socialMedia.map(site => {
              return (
                <a
                  target="blank"
                  key={site.text}
                  className="icon-wrapper"
                  href={site.url}
                >
                  <FontAwesomeIcon icon={site.icon} />
                  <p>{site.text}</p>
                </a>
              );
            })}
        </div>
      </footer>
    );
  }
}

export default Footer;
