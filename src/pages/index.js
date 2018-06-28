import React from 'react';
import '../scss/index.scss';
// import { Link } from 'gatsby';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Work from '../components/sections/Work';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
import { aboutText } from '../content/copy';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <Hero />
    <About aboutText={aboutText} />
    <Work />
    <Skills />
    <Contact />
  </Layout>
);

export default IndexPage;
