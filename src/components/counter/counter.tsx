import { component$, useSignal, useStore, $ } from "@builder.io/qwik";
import "./counter.css";

interface CounterProps {
    count: number;
    contador: number;
}

export default component$(() => {
    const count = useSignal(20);
    const initialStore = { counter: 50 };
    const store = useStore(initialStore);
    const functionStore = useStore(
        {
            contador: 0,
            increment: $(function () { this.contador++ }),
            decrement: $(function () { this.contador-- })
        }
    );
    return <div>
        <section class='card'>

            <h1 class="titles">w/useSignal</h1>

            <button onClick$={() => count.value--}>-</button>
            {count}
            <button onClick$={() => count.value++}>+</button>
        </section>
        <section class='card'>

            <h1 class='titles'>w/useStore</h1>
            <button onClick$={() => store.counter--}>-</button>
            {store.counter}
            <button onClick$={() => store.counter++}>+</button>
        </section>

        <section class='card'>

            <h1 class='titles'>useStore w/Functions</h1>
            <button onClick$={() => functionStore.decrement()}>-</button>
            {functionStore.contador}
            <button onClick$={() => functionStore.increment()}>+</button>
        </section>

    </div>;
});