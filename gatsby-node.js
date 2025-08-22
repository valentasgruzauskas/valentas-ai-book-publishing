const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const markdownTemplate = path.resolve(`src/templates/markdown-template.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { frontmatter: { order: ASC } }
        limit: 1000
        filter: { frontmatter: { slug: { ne: null } } }
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
    const slug = node.frontmatter.slug
    if (slug) {
      createPage({
        path: slug,
        component: markdownTemplate,
        context: {
          id: node.id,
        },
      })
    } else {
      reporter.warn(`No slug found for node ${node.id}`)
    }
  })
}