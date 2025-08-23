/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Valentas AI Book Publishing`,
    description: `AI-powered book publishing platform`,
    siteUrl: `https://username.github.io/valentas-ai-book-publishing/`,
  },
  pathPrefix: `/valentas-ai-book-publishing`,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 90,
              withWebp: true,
              loading: "lazy",
            },
          },
        ],
      },
    },
  ],
};
