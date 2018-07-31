import React from 'react';
import navLinks from '../content/navLinks';
import logo from '../assets/logos/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

const Menu = ({ isOpen }) => {
  return (
    <header className={`${isOpen ? 'menu is-open' : 'menu'}`}>
      <Link to="/" className="link-logo">
        <img src={logo} alt="dakota bryant logo" className="logo" />
      </Link>

      <div className="links">
        {navLinks &&
          navLinks.map(link => {
            return (
              <Link key={link.text} to={link.path}>
                {link.text}
              </Link>
            );
          })}
      </div>
      <div className="button-wrapper">
        <FontAwesomeIcon className="music-icon" icon={faMusic} />
      </div>
    </header>
  );
};

export default Menu;
