import React from 'react';
import Layout from '../components/layout';
import WorkHero from '../components/sections/WorkHero';

const Work = () => {
  return (
    <Layout>
      <WorkHero />
      <form name="contact" netlify>
        <p>
          <label htmlFor="">
            <input type="text" />
          </label>
        </p>
      </form>
    </Layout>
  );
};

export default Work;
