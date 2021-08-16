import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Post } from '../components';

export default function Home({ data }) {
  const posts = data.allMdx.nodes;
  const site = data.site;

  return (
    <Layout>
      {posts.map((post) => (
        <Post key={post.frontmatter.slug} data={{ ...post, site }} />
      ))}
    </Layout>
  );
}

export const query = graphql`
  {
    site {
      siteMetadata {
        url
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          title
          date
          slug
        }
        body
      }
    }
  }
`;
