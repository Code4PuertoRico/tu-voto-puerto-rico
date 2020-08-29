module.exports = {
  siteMetadata: {
    title: `Tu Voto`,
    description: `Tu Voto te ayuda a encontrar recursos para que puedas orientarte antes de votar en las próximas elecciones el 2 de noviembre de 2020.`,
    author: `@Code4PuertoRico`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tu-voto`,
        short_name: `Tu Voto`,
        start_url: `/`,
        background_color: `#4a5568`,
        theme_color: `#4a5568`,
        display: `minimal-ui`,
        icon: `src/images/code-4-pr.png`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
}
