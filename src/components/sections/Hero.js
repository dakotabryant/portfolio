import React, { Component } from 'react';
import Name from '../../assets/titles/db.svg';

class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="hero">
        <object data={Name} type="image/svg+xml" />
        <div className="button-wrapper">
          <button className="music">Give me the full experience</button>
        </div>
      </section>
    );
  }
}

export default Hero;
