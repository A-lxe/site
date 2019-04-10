module.exports = {
  siteMetadata: {
    title: `Alex Aubuchon`,
    description: `Alex Aubuchon's personal site.`,
    author: `Alex Aubuchon`,
    siteUrl: `https://aub.dev`,
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
        name: `Alex Aubuchon`,
        short_name: `Alxe`,
        start_url: `/`,
        background_color: `hsl(220, 50%, 20%)`,
        theme_color: `hsl(220, 50%, 20%)`,
        display: `minimal-ui`,
        icon: `src/images/alxe-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
};
