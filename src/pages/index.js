import React, { Component } from 'react';
import '../scss/index.scss';
// import { Link } from 'gatsby';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Work from '../components/sections/Work';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
import { aboutText } from '../content/copy';
import Layout from '../components/layout';
import { connect } from 'react-redux';

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Hero />
        <About aboutText={aboutText} />
        <Work />
        <Skills />
        <Contact />
      </Layout>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     showModal: state.mainReducer.showOverlay,
//   };
// };

// export default connect(mapStateToProps)(IndexPage);

export default IndexPage;
