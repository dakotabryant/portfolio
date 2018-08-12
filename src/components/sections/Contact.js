import React from 'react';
import { Link } from 'gatsby';

const Contact = () => {
  return (
    <section className="section contact">
      <div className="content-container">
        <h2>have a project?</h2>
        <Link to="/contact">
          <button>contact me</button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
