import React from 'react';
import '../styles/reset.css';
import '../styles/global.css';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Блог Чудновского</h1>
        <h3>Пишу об интересном и забавном из своей жизни</h3>
      </header>
      {children}
      <footer>© 2021 «Блог Чудновского»</footer>
    </>
  );
}
