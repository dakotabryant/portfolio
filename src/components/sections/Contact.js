import React from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/main';

class Contact extends React.Component {
  render() {
    return (
      <section className="section contact">
        <div className="content-container">
          <h2>have a project?</h2>
          <button onClick={() => this.props.dispatch(toggleModal())}>
            contact me
          </button>
        </div>
      </section>
    );
  }
}

export default connect()(Contact);
