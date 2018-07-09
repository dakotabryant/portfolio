import React, { Component } from 'react';
import Name from '../../assets/titles/db.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { toggleModal } from '../../actions/main';
import { connect } from 'react-redux';
class Hero extends Component {
  _clickHandler = () => {
    this.props.dispatch(toggleModal());
  };

  render() {
    return (
      <section className="hero">
        <object data={Name} type="image/svg+xml" aria-label="hero" />
        <div className="button-wrapper" onClick={this._clickHandler}>
          <FontAwesomeIcon className="music-icon" icon={faMusic} />
        </div>
      </section>
    );
  }
}

export default connect()(Hero);
