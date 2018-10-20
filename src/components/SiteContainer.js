import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactModal from './ContactModal';
import { toggleModal } from '../actions/main';

class SiteContainer extends Component {
  handleClose = () => {
    this.props.dispatch(toggleModal());
  };
  render() {
    const { showModal, children } = this.props;
    return (
      <React.Fragment>
        <ContactModal showModal={showModal} onClose={this.handleClose} />
        {children}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    showModal: state.mainReducer.showModal,
  };
};

export default connect(mapStateToProps)(SiteContainer);
