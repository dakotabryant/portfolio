import React, { Component } from 'react';
import Name from '../../assets/titles/db.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { testAction } from '../../actions/main';
import { connect } from 'react-redux';
class Hero extends Component {
  componentDidMount() {
    this.props.dispatch(testAction());
  }

  render() {
    return (
      <section className="hero">
        <object data={Name} type="image/svg+xml" aria-label="hero" />
        <div className="button-wrapper">
          <FontAwesomeIcon className="music-icon" icon={faMusic} />
        </div>
      </section>
    );
  }
}

export default connect()(Hero);
