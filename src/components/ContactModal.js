import React from 'react';

const ContactModal = () => {
  return (
    <div className="contact-modal">
      <form name="contact" netlify className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactModal;
