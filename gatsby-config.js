/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
    siteMetadata: {
        title: "The Electric Quahogs",
        author: "Daniel Duarte-Baird",
        titleTemplate: "%s · FTC Team #252",
        description:
          "We are the Electric Quahogs, FTC team #252 from the Wheeler School, this is our website!",
        url: "https://electricquahogs.gatsbyjs.io", // No trailing slash allowed!
        siteUrl: "https://electricquahogs.gatsbyjs.io",
        image: "/seoimg.png", // Path to the image placed in the 'static' folder, in the project's root directory.
        twitterUsername: "@electricquahogs", // i dont think we have a twitter :/
        keywords: ["252", "electric", "quahogs", "wheeler", "robotics", "first", "tech", "challenge", "FTC", "team", "highschool", "upperschool", "school"],
    },
    plugins: [
      `gatsby-plugin-gatsby-cloud`,
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://electricquahogs.gatsbyjs.io',
          sitemap: 'https://electricquahogs.gatsbyjs.io/sitemap.xml',
          resolveEnv: () => process.env.GATSBY_ENV,
          env: {
            development: {
              policy: [{ userAgent: '*', allow: ['/'] }]
            },
            production: {
              policy: [{ userAgent: '*', allow: '/' }]
            }
          }
        }
      },
        "gatsby-plugin-react-helmet",
        `gatsby-plugin-sitemap`,
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          icon: 'src/favicon/logotrans.png',
        },
      },
  
    ]
  };