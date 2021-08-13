import React from 'react';

export default function Post({ title, body }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}
