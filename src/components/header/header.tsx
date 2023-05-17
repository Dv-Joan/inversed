import style from './header.module.scss'
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class={style.header}>
      <h1>Inverse</h1>
      <p>
        Project for <a href="www.google.com">Inverse INC</a> solutions to get started with Qwik.
      </p>
    </div>
  );
});
