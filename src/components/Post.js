import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from './Layout';

export default function Post({ data, pageContext }) {
  const url = data.site.siteMetadata.url;
  // если статья в отдельном окне открыта
  if (data.mdx) {
    data = data.mdx;
  }
  const { frontmatter, body } = data;
  const [bounceAnimation, setBounceAnimation] = useState(false);

  const onClickHandle = async () => {
    await navigator.clipboard.writeText(url + frontmatter.slug);
    setBounceAnimation(true);
  };

  const previous = pageContext?.previous;
  const next = pageContext?.next;
  const post = (
    <article>
      <div className="title-wrapper">
        <Link to={!pageContext ? frontmatter.slug : undefined}>
          <h3>{frontmatter.title}</h3>
        </Link>
        <span className="date">{frontmatter.date}</span>
      </div>
      <MDXRenderer>{body}</MDXRenderer>
      {pageContext && (
        <div className="previous-next-wrapper">
          <Link to={`/${previous?.frontmatter.slug}`}>
            {previous?.frontmatter.title}
          </Link>
          <Link to={`/${next?.frontmatter.slug}`}>
            {next?.frontmatter.title}
          </Link>
        </div>
      )}
      <button
        className={`share-button ${bounceAnimation ? 'bounceAnimation' : ''}`}
        onClick={onClickHandle}
        onAnimationEnd={() => setBounceAnimation(false)}
      >
        <svg
          className="share-svg"
          viewBox="0 0 511.771 511.771"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="m189.547 128.897c-60.302 62.391-47.143 165.931 21.932 211.798 2.276 1.512 5.304 1.212 7.259-.698 14.542-14.209 26.844-27.972 37.616-45.476 1.648-2.678.623-6.153-2.142-7.651-10.536-5.708-21.02-16.411-26.922-27.717l-.007.004c-7.07-14.078-9.477-29.859-5.734-46.157.004.001.008.002.012.002 4.307-20.866 26.708-40.276 43.817-58.227-.036-.012-.071-.025-.107-.037l64.103-65.426c25.546-26.073 67.566-26.288 93.377-.477 26.072 25.545 26.503 67.777.958 93.849l-38.828 39.928c-1.797 1.848-2.38 4.544-1.539 6.981 8.94 25.925 11.139 62.48 5.148 90.098-.168.773.786 1.279 1.339.714l82.638-84.344c52.791-53.88 52.343-141.604-.995-194.942-54.433-54.433-143.048-53.98-196.922 1.005l-84.672 86.419c-.112.118-.218.238-.331.354z" />
            <path d="m344.038 352.576c-.001.003-.003.006-.004.009.053-.022.102-.043.155-.066 16.865-30.839 20.185-66.208 12.281-100.687l-.036.037-.039-.017c-7.505-30.709-28.098-61.203-56.066-79.978-2.406-1.615-6.249-1.428-8.502.394-14.167 11.455-28.034 26.144-37.184 44.889-1.437 2.943-.361 6.478 2.471 8.122 10.619 6.165 20.209 15.191 26.63 27.174l.01-.007c5.004 8.465 9.935 24.527 6.741 41.785-.002 0-.005 0-.007 0-2.98 22.881-26.086 43.869-44.454 62.781l.009.009c-13.982 14.298-49.525 50.532-63.757 65.072-25.545 26.072-67.777 26.503-93.849.958-26.072-25.545-26.503-67.777-.958-93.849l38.943-40.048c1.765-1.815 2.365-4.453 1.58-6.86-8.647-26.531-11.016-62.262-5.558-89.849.152-.769-.794-1.26-1.343-.7l-81.395 83.075c-53.332 54.433-52.88 143.057 1.006 196.942 54.43 53.33 142.597 52.429 195.927-2.001 18.527-20.724 97.835-94.153 107.399-117.185z" />
          </g>
        </svg>
      </button>
    </article>
  );

  // если статья в отдельном окне открыта
  if (pageContext) {
    return <Layout>{post}</Layout>;
  }

  return post;
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    site {
      siteMetadata {
        url
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        slug
      }
      body
    }
  }
`;
