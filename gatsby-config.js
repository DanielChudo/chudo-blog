module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'blog',
      },
    },
  ],
  siteMetadata: {
    title: 'Блог Чудновского',
  },
};
