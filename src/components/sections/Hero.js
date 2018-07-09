import React, { Component } from 'react';
import Name from '../../assets/titles/db.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="hero">
        <object data={Name} type="image/svg+xml" />
        <div className="button-wrapper">
          <FontAwesomeIcon className="music-icon" icon={faMusic} />
        </div>
      </section>
    );
  }
}

export default Hero;
