import React from 'react';
import '../css/reset.css';
import '../css/global.css';
import '../css/linkAnimation.css';
import { Link } from 'gatsby';

export default function Layout({ children }) {
  return (
    <>
      <Link to="/">
        <header>
          <h1>Блог Чудновского</h1>
          <h3>Пишу об интересном и забавном из своей жизни</h3>
        </header>
      </Link>
      {children}
      <footer>© 2021 «Блог Чудновского»</footer>
    </>
  );
}
