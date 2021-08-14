import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Post } from '../components';

export default function Home({ data }) {
  const posts = data.allMdx.nodes;
  return (
    <Layout>
      {posts.map((post) => (
        <Post
          title={post.frontmatter.title}
          body="Текст поста"
          date={post.frontmatter.date}
        />
      ))}
    </Layout>
  );
}

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date
          title
        }
      }
    }
  }
`;
