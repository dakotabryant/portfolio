import React from 'react';
import Link from 'gatsby-link';
import '../scss/index.scss';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Work from '../components/sections/Work';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
import { aboutText } from '../content/copy';

console.log('====================================');
console.log(React);
console.log('====================================');

const IndexPage = () => (
  <div>
    <Hero />
    <About aboutText={aboutText} />
    <Work />
    <Skills />
    <Contact />
  </div>
);

export default IndexPage;
