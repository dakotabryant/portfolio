module.exports = {
  siteMetadata: {
    title: 'Dakota Bryant'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass', {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    }, {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-transformer-remark'
  ]
};
