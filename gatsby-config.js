/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/gatsby-github-pages",

  siteMetadata: {
    title: `Proyección Electroluz SRL`,
    description: `Empresa dedica al desarrollo de obras y fabricacion de celdas de mt y tableros eléctricos.`,
    author: `Nestor Gomez`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  /* Your site config here */

  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:100,300,400,500,600,700,900`],

        display: "swap",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-mdx`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `novedades`,
        path: `${__dirname}/src/novedades`,
      },
    },

    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {},
    },
  ],
}
