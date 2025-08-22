const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const markdownTemplate = path.resolve(`src/templates/markdown-template.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: markdownTemplate,
      context: {
        id: node.id,
      },
    })
  })
}