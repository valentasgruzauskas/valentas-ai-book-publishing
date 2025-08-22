import React from "react"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div>
        <h1>{frontmatter.title}</h1>
        <p style={{ color: '#666', fontSize: '14px' }}>
          {frontmatter.date}
        </p>
        <div 
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ lineHeight: '1.6' }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`