import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import NavLinks from '../content/navLinks';
import Header from '../components/header';
import Footer from '../components/Footer';
import { Provider } from 'react-redux';
import store from '../store';
import SiteContainer from './SiteContainer';
import FullStory from 'react-fullstory';

const Layout = ({ children }) => (
  <React.Fragment>
    <FullStory org="3S40K" />
    <Helmet
      title="Dakota Bryant - Javascript Engineer"
      meta={[
        {
          name: 'description',
          content:
            'A humble collection of work from Dakota Bryant, a Javascript Engineer based out of Charlotte, NC.',
        },
        {
          name: 'keywords',
          content:
            'developer, front-end, web, design, strategy, creative, technology, apps, html, css, javascript',
        },
        {
          property: 'og:site_name',
          content: 'Dakota Bryant',
        },
        {
          property: 'og:title',
          content: 'Dakota Bryant',
        },
        {
          property: 'og:type',
          content: 'company',
        },
        {
          property: 'og:image',
          content: 'https://i.imgur.com/jpFR9BM.jpg',
        },
        {
          property: 'og:description',
          content:
            'A humble collection of work from Dakota Bryant, a Javascript Engineer based out of Charlotte, NC.',
        },
        {
          name: 'robots',
          content: 'index, nofollow',
        },
        {
          name: 'language',
          content: 'English',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:description',
          content:
            'A humble collection of work from Dakota Bryant, a Javascript Engineer based out of Charlotte, NC.',
        },
        {
          name: 'twitter:site',
          content: '@dakotabryantCO',
        },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
        },
      ]}
    />
    <React.Fragment>
      <Provider store={store}>
        <React.Fragment>
          <Header
            siteTitle="Dakota Bryant - Javascript Engineer"
            navLinks={NavLinks}
          />
          <SiteContainer>{children}</SiteContainer>
        </React.Fragment>
      </Provider>
      <Footer />
    </React.Fragment>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;