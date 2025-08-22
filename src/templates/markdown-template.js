import { graphql, Link } from "gatsby";
import React from "react";

export default function Template({ data }) {
  const { markdownRemark, allMarkdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  // Get all chapters sorted by order
  const allChapters = allMarkdownRemark.nodes.sort((a, b) => a.frontmatter.order - b.frontmatter.order);

  // Find current chapter index
  const currentIndex = allChapters.findIndex((chapter) => chapter.frontmatter.slug === frontmatter.slug);

  // Get previous and next chapters
  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;

  return (
    <div>
      {/* Simple top navigation */}
      <nav
        style={{
          borderBottom: "1px solid #eee",
          padding: "10px 20px",
          backgroundColor: "#fff",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#666",
            fontSize: "14px",
          }}
        >
          ← All Chapters
        </Link>
      </nav>

      {/* Main content */}
      <div
        style={{
          maxWidth: "42rem",
          margin: "0 auto",
          padding: "3rem 2rem",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "18px",
          lineHeight: "1.7",
          color: "#2c2c2c",
          backgroundColor: "#fefefe"
        }}
      >
        <h1 style={{
          fontSize: "2rem",
          fontWeight: "normal",
          marginBottom: "2rem",
          color: "#1a1a1a"
        }}>{frontmatter.title}</h1>
        <div 
          dangerouslySetInnerHTML={{ __html: html }} 
          style={{ 
            lineHeight: "1.7"
          }} 
        />

        {/* Simple navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "60px",
            paddingTop: "20px",
            borderTop: "1px solid #eee",
          }}
        >
          {prevChapter ? (
            <Link
              to={prevChapter.frontmatter.slug}
              style={{
                textDecoration: "none",
                color: "#0066cc",
              }}
            >
              ← {prevChapter.frontmatter.title}
            </Link>
          ) : (
            <div />
          )}

          {nextChapter && (
            <Link
              to={nextChapter.frontmatter.slug}
              style={{
                textDecoration: "none",
                color: "#0066cc",
              }}
            >
              {nextChapter.frontmatter.title} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        order
      }
    }
    allMarkdownRemark {
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
