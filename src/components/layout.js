import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import NavLinks from '../content/navLinks';

import Header from '../components/header';
import Footer from '../components/Footer';

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
    {children}
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;
