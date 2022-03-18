/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
      title: `Electric Quahogs`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-gatsby-cloud`,
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/favicon/logotrans.png',
      },
    },

  ]
};