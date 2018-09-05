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
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    const bodySelector = document.getElementsByTagName('body')[0];
    if (nextProps.showModal) {
      bodySelector.classList.add('no-scroll');
    } else {
      bodySelector.classList.remove('no-scroll');
    }
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ name: 'contact', ...this.state }),
    })
      .then(() => this.props.dispatch(toggleModal()))
      .catch(error => alert(error));

    e.preventDefault();
  };
  render() {
    const { showModal, onClose } = this.props;
    const { name, email, message } = this.state;
    if (showModal) {
      return (
        <div className="contact-modal">
          {showModal && (
            <form
              className="contact-form"
              onSubmit={this.handleSubmit}
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="close-button"
                onClick={onClose}
              />

              <label htmlFor="name">Name</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="name"
                value={name}
              />
              <label htmlFor="email">Email</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="email"
                value={email}
              />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                onChange={this.handleChange}
                value={message}
              />
              <button type="submit">Send</button>
            </form>
          )}
        </div>
      );
    } else return '';
  }
}

export default connect()(ContactModal);
