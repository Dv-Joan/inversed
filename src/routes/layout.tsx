import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header'
import Counter from '../components/counter';
export default component$(() => {
  return (
    <div>
      <Header />
      < Slot />
      <Counter />
    </div>
  )
});
