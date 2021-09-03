import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Post } from '../components';

export default function Home({ location, data }) {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      {posts.map((post) => (
        <Post key={post.frontmatter.slug} data={post} location={location} />
      ))}
    </Layout>
  );
}

export const query = graphql`
  {
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
