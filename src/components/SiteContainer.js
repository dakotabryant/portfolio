import React, { Component } from 'react';
import { connect } from 'react-redux';

class SiteContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={this.props.showModal ? 'no-scroll' : ''}>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showModal: state.mainReducer.showModal,
  };
};

export default connect(mapStateToProps)(SiteContainer);
