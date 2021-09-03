/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout, Post } from '../components';

export default function Home({ location, data }) {
  const posts = data.allMdx.nodes;
  useEffect(() => {
    document.title = 'Блог Чудновского';
  }, []);

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

Home.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};
