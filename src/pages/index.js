import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <div style={{ 
      padding: "4rem 2rem", 
      maxWidth: "32rem", 
      margin: "0 auto",
      textAlign: "center",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      fontFamily: "Georgia, serif"
    }}>
      <h1 style={{ 
        fontSize: "2.5rem", 
        marginBottom: "1.5rem", 
        color: "#333",
        fontWeight: "normal"
      }}>
        AI for Everyone
      </h1>
      
      <p style={{ 
        fontSize: "1.1rem", 
        color: "#666", 
        marginBottom: "2.5rem",
        lineHeight: "1.6"
      }}>
        A practical guide to understanding and leveraging AI in business and daily life.
      </p>
      
      <Link
        to="/ai-book-master"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          border: "1px solid #333",
          color: "#333",
          textDecoration: "none",
          fontSize: "1rem",
          fontWeight: "normal"
        }}
      >
        Start Reading
      </Link>
    </div>
  );
};

export default IndexPage;
