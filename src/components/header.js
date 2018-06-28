import React from 'react';
import { Link } from 'gatsby';
import logo from '../assets/logos/Logo.svg';

const Header = ({ siteTitle, navLinks }) => (
  <div className="header">
    <img src={logo} alt="dakota bryant logo" className="logo" />
    <div className="nav-links">
      {navLinks &&
        navLinks.map(({ text, path }) => {
          return (
            <Link to={path} key={path}>
              {text}
            </Link>
          );
        })}
    </div>
  </div>
);

export default Header;
