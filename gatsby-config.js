module.exports = {
  siteMetadata: {
    title: 'Milan Vodicka',
    subTitle: 'Programming is supposed to be functional, business is supposed to be lean and leadership is supposed to have your back.',
    colors: {
      a: '#F3EFF1',
      b: '#53A8DE',
      c: '#4D85AA',
      d: '#818A9D',
      e: '#304260',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Milan Vodicka',
        short_name: 'Milan',
        start_url: '/',
        background_color: '#333333',
        theme_color: '#333333',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
