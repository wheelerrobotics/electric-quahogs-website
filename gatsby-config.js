/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
      title: "The Electric Quahogs",
      author: "Daniel Duarte-Baird",
      titleTemplate: "%s · FTC Team #252",
      description:
        "We are the Electric Quahogs, FTC team #252 from the Wheeler School, this is our website!",
      url: "https://electricquahogs.gatsbyjs.io", // No trailing slash allowed!
      image: "/seoimg.png", // Path to the image placed in the 'static' folder, in the project's root directory.
      twitterUsername: "@electricquahogs", // i dont think we have a twitter :/
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