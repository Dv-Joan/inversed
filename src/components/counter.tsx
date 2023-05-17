import { component$, useSignal, useStore, $ } from "@builder.io/qwik";



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
    return <div class='flex lg:flex-row flex-col gap-3 justify-center m-10'>

        <section class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">w/useSignal</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Counter increment/decrement classic example with useSignal qwik module.</p>
            <button onClick$={() => count.value++} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 duration-100  ">
                Increment

            </button>
            <span class="mx-2 text-gray-600 dark:text-gray-300">{count}</span>
            <button onClick$={() => count.value--} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-[1px] border-blue-700 rounded-lg hover:bg-blue-500 active:bg-blue-600 duration-100">
                Decrement

            </button>
        </section>
        <section class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">w/useStore</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Counter increment/decrement classic example with useSignal qwik module.</p>
            <button onClick$={() => store.counter++} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 duration-100  ">
                Increment

            </button>
            <span class="mx-2 text-gray-600 dark:text-gray-300">{store.counter}</span>
            <button onClick$={() => store.counter--} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-[1px] border-blue-700 rounded-lg hover:bg-blue-500 active:bg-blue-600 duration-100">
                Decrement

            </button>
        </section>
        <section class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">useStore w/Functions</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Counter increment/decrement classic example with useSignal qwik module.</p>
            <button onClick$={() => functionStore.increment()} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 duration-100  ">
                Increment

            </button>
            <span class="mx-2 text-gray-600 dark:text-gray-300">{functionStore.contador}</span>
            <button onClick$={() => functionStore.decrement()} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-[1px] border-blue-700 rounded-lg hover:bg-blue-500 active:bg-blue-600 duration-100">
                Decrement

            </button>
        </section>




    </div>;
});