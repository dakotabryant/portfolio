import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

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
              name="contact"
              data-netlify="true"
              method="POST"
              className="contact-form"
            >
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
              <button type="submit">Send</button>
            </form>
          )}
        </div>
      );
    } else return '';
  }
}

export default ContactModal;
