import React from 'react';
import navLinks from '../content/navLinks';

const Menu = ({ isOpen }) => {
  return (
    <div className={`${isOpen ? 'menu is-open' : 'menu'}`}>
      <div className="links">
        {navLinks &&
          navLinks.map(link => {
            return <div>{link.text}</div>;
          })}
      </div>
    </div>
  );
};

export default Menu;
