import React from 'react';
import { navigateTo } from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(this.props.onClose)
      .catch(error => alert(error));
  };

  render() {
    const { showModal, onClose } = this.props;
    if (showModal) {
      return (
        <div className="contact-modal">
          <form
            className="contact-form"
            name="contact"
            method="post"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="close-button"
              onClick={onClose}
            />
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <label hidden>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
            <label>
              Name
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <label>
              Email
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
            <label>
              Message
              <textarea name="message" onChange={this.handleChange} />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      );
    } else return '';
  }
}
