import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import NavLinks from '../content/navLinks';
import Header from '../components/header';
import Footer from '../components/Footer';
import { Provider } from 'react-redux';
import store from '../store';
import Loader from './Loader';
import ContactModal from './ContactModal';
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
{
  /* <meta charset="UTF-8">
  <title>Dakota Bryant - Web Developer, Creator, and Interactive Strategist</title>
  <meta property="og:site_name" content="Dakota Bryant" />
  <meta property="og:title" content="Dakota Bryant" />
  <meta property="og:type" content="company" />
  <meta property="og:image" content="http://i.imgur.com/N9mvqze.jpg" />
  <meta property="og:description" content="A humble collection of the works of Web Developer, Dakota Bryant." />
  <meta name="description" content="A humble collection of work from Dakota Bryant, a front-end developer based out of Tulsa, OK.">
    <meta name="keywords" content="developer, front-end, web, design, strategy, creative, technology, apps, html, css, javascript">
      <meta name="robots" content="index, nofollow">
        <meta name="web_author" content="Dakota Bryant">
          <meta name="language" content="English">

            <meta name="viewport" content="width=device-width, initial-scale=1">

              <meta name="twitter:card" content="summary" />
              <meta name="twitter:description" content="A humble collection of the works of Web Developer, Dakota Bryant.">
                <meta property="og:url" content="http://dakotabryant.com" />
                <meta name="twitter:site" content="@dakotabryantco">
                  <meta name="twitter:creator" content="@dakotabryantco">
                    <meta name="twitter:title" content="Dakota Bryant">
                      <meta name="twitter:image" content="http://i.imgur.com/N9mvqze.jpg">


                        <link rel="image_src" href="http://i.imgur.com/N9mvqze.jpg" />
                        <link rel='shortcut icon' href='assets/favicon.ico' type='image/x-icon' />
                        <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Montserrat|Roboto+Condensed" rel="stylesheet">
                          <!-- <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"> -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css">
                              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                                <link rel="stylesheet" href="sass/animate.css">
                                  <link rel="stylesheet" href="main.css">
                                    <meta name="twitter:card" content="summary_large_image"> */
}
