import * as React from "react";
import { Link, graphql } from "gatsby";

const AiBookMasterPage = ({ data }) => {
  const chapters = data.allMarkdownRemark.nodes
    .filter(node => node.frontmatter.slug && node.frontmatter.slug.includes('/ai-book-master/chapter-'))
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);

  return (
    <div style={{ 
      padding: "3rem 2rem", 
      maxWidth: "48rem", 
      margin: "0 auto",
      fontFamily: "Georgia, serif",
      lineHeight: "1.6"
    }}>
      <header style={{ marginBottom: "3rem" }}>
        <h1 style={{ 
          fontSize: "2rem", 
          marginBottom: "0.5rem", 
          color: "#333",
          fontWeight: "normal"
        }}>
          AI for Everyone
        </h1>
        <p style={{ 
          fontSize: "1.1rem", 
          color: "#666", 
          margin: "0"
        }}>
          A Manager's Guide to Understanding and Leading in the Age of Artificial Intelligence
        </p>
      </header>

      <div style={{ marginBottom: "2rem" }}>
        {chapters.map((chapter) => (
          <div key={chapter.frontmatter.slug} style={{ marginBottom: "1rem" }}>
            <Link
              to={chapter.frontmatter.slug}
              style={{
                textDecoration: "none",
                color: "#333",
                display: "block",
                padding: "0.75rem 0",
                borderBottom: "1px solid #eee"
              }}
            >
              <div style={{ 
                fontSize: "0.9rem", 
                color: "#888", 
                marginBottom: "0.25rem" 
              }}>
                Chapter {chapter.frontmatter.order}
              </div>
              <div style={{ 
                fontSize: "1.1rem",
                color: "#333"
              }}>
                {chapter.frontmatter.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { ne: null } } }
    ) {
      nodes {
        frontmatter {
          slug
          title
          order
        }
      }
    }
  }
`;

export default AiBookMasterPage;