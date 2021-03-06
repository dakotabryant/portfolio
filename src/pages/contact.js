import React from 'react';
import Layout from '../components/layout';
import ContactForm from '../components/ContactForm';

const About = () => {
  return (
    <Layout>
      {/* <ContactForm /> */}
      <form name="contact" netlify className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" />
        <button type="submit">Send</button>
      </form>
    </Layout>
  );
};

export default About;
