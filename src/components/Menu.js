import React from 'react';
import navLinks from '../content/navLinks';
import logo from '../assets/logos/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ isOpen }) => {
  return (
    <div className={`${isOpen ? 'menu is-open' : 'menu'}`}>
      <img src={logo} alt="dakota bryant logo" className="logo" />

      <div className="links">
        {navLinks &&
          navLinks.map(link => {
            return <div>{link.text}</div>;
          })}
      </div>
      <div className="button-wrapper">
        <FontAwesomeIcon className="music-icon" icon={faMusic} />
      </div>
    </div>
  );
};

export default Menu;
