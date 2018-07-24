import React, { Component } from 'react';
import Name from '../../assets/titles/db.svg';
import { toggleModal } from '../../actions/main';
import { connect } from 'react-redux';
class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <object data={Name} type="image/svg+xml" aria-label="hero" />
      </section>
    );
  }
}

export default connect()(Hero);
