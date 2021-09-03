import React, { useEffect } from 'react';
import * as style from '../css/404.module.css';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Страница не найдена';
  }, []);

  // TODO: добавить кнопку для перехода на главную страницу
  return (
    <section className={style.section}>
      <h1 className={style.h1}>404</h1>
      <span className={style.sorry}>
        Мы очень старательно искали интересующую Вас страницу, но не смогли
        найти ее :(
      </span>
    </section>
  );
}
