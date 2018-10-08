import React, { Component } from 'react';
import Name from '../../assets/titles/db.png';
import { toggleModal } from '../../actions/main';
import { connect } from 'react-redux';
class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <img src={Name} alt="" />
      </section>
    );
  }
}

export default connect()(Hero);
