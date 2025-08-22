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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}