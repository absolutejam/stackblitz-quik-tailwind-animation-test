import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const active = useSignal('A');
  return (
    <div class="flex flex-col p-8 h-[800px] gap-2">
      <div class="flex gap-2">
        <button
          class="rounded border border-slate-200 bg-cyan-100 p-2 w-[100px]"
          onClick$={() => (active.value = 'A')}
        >
          A
        </button>
        <button
          class="rounded border border-slate-200 bg-green-100 p-2 w-[100px]"
          onClick$={() => (active.value = 'B')}
        >
          B
        </button>
      </div>

      <div class="flex relative border border-slate-200 bg-slate-100 rounded-lg h-[100px]">
        <div
          data-active={active.value === 'A'}
          class="
      flex w-[400px] h-[200px] border border-slate-300 rounded-lg p-4 bg-cyan-100 absolute left-2 top-2
      hidden 
      data-[active]:flex
      data-[active]:animate-in zoom-in-90 slide-in-from-right-72
      "
        >
          Content A
        </div>

        <div
          data-active={active.value === 'B'}
          class="
      flex w-[400px] h-[200px] border border-slate-300 rounded-lg p-4 bg-green-100 absolute left-2 top-2
      hidden
      data-[active]:flex
      data-[active]:animate-in zoom-in-90
      "
        >
          Content B
        </div>
      </div>
    </div>
  );
});
