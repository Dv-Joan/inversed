import { component$, Slot } from '@builder.io/qwik';
import './layout.css';
import { Image } from '@unpic/qwik';
import Counter from '../components/counter/counter';
export default component$(() => {
  return (
    <div >
      <div class="navigation">
        <a href="#" class="logo"><Image src="https://img.icons8.com/?size=1x&id=42710&format=png" class="avatar" alt="Avatar"
          layout='constrained'
          width={50}
          height={50} /></a>
        <div class="menu">
          <div class="profile">
            <Image src="https://randomuser.me/api/portraits/men/97.jpg" class="avatar" alt="Avatar"
              layout='constrained'
              width={30}
              height={30} />
            <span class="name">John Doe</span>
            <a href="#" class="logout">Logout</a>
          </div>
        </div>
      </div>
      < Slot />
      <Counter />
    </div>
  )
});
