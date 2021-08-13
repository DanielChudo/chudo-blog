import React from 'react';
import { Layout, Post } from '../components';

export default function Home() {
  return (
    <Layout>
      <Post title="Заголовок" body="Текст поста" />
      <Post title="Заголовок" body="Текст поста" />
      <Post title="Заголовок" body="Текст поста" />
      <Post title="Заголовок" body="Текст поста" />
    </Layout>
  );
}
