import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// import Header from '~/components/header';

export default component$(() => {
  return (
    <>
      {/* <Header /> */}
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
