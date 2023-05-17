import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1>Inverse</h1>
      <p>
        Project for <a href="www.google.com">Inverse INC</a> solutions to get started with Qwik.
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Inverse',
  meta: [
    {
      name: 'Inverse Inc',
      content: 'Inverse Inc technology solutions company',
    },
  ],
};
