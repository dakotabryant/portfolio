import React from 'react';
import { push } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { toggleModal } from '../actions/main';
import { connect } from 'react-redux';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactModal extends React.Component {
  componentWillReceiveProps(nextProps) {
    const bodySelector = document.getElementsByTagName('body')[0];
    if (nextProps.showModal) {
      bodySelector.classList.add('no-scroll');
    } else {
      bodySelector.classList.remove('no-scroll');
    }
  }
  render() {
    const { showModal, onClose } = this.props;
    if (showModal) {
      return (
        <div className="contact-modal">
          {showModal && (
            <form
              className="contact-form"
              name="contact-form"
              method="post"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="close-button"
                onClick={onClose}
              />

              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
              <label htmlFor="message">Message</label>
              <textarea name="message" />
              <button>Send</button>
            </form>
          )}
        </div>
      );
    } else return '';
  }
}

export default connect()(ContactModal);
