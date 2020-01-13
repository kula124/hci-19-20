/* eslint-disable */

require('dotenv-safe').config()

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
      resolve: `gatsby-source-filesystem`
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/ // Should load inline svg if 'inline' is in filename
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // *.css files are included by default.
        //* This will support scss styes *//
        filetypes: {
          ".scss": { syntax: `postcss-scss` },
        },
   
        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_KEY,
      },
    },
    {
      options: {
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        theme_color: `#663399`
      },
      resolve: `gatsby-plugin-manifest`
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  siteMetadata: {
    author: `@gatsbyjs`,
    description: `Kick off your next, 
    great Gatsby project with this default starter. 
    This barebones starter ships with the main Gatsby configuration files you might need.`,
    title: `Gatsby Default Starter`
  }
}
