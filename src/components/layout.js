import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import NavLinks from '../content/navLinks';
import Header from '../components/header';
import Footer from '../components/Footer';
import { Provider } from 'react-redux';
import store from '../store';

const Layout = ({ children }) => (
  <React.Fragment>
    <Helmet
      title="Dakota Bryant - Javascript Engineer"
      meta={[
        {
          name: 'description',
          content: 'Sample',
        },
        {
          name: 'keywords',
          content: 'sample, something',
        },
      ]}
    />
    <Header
      siteTitle="Dakota Bryant - Javascript Engineer"
      navLinks={NavLinks}
    />
    <Provider store={store}>
      <React.Fragment>{children}</React.Fragment>
    </Provider>
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;
