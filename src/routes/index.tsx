import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const active = useSignal('A');
  return (
    <div class="flex flex-col p-8 h-[800px] gap-2">
      <div class="flex relative gap-2 items-center border border-red-700 rounded-lg p-2">
        <div id="triggers" class="flex relative gap-2 items-center">
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
          <button
            class="rounded border border-slate-200 bg-red-100 p-2 w-[100px]"
            onClick$={() => (active.value = 'None')}
          >
            None
          </button>

          <div>Active: {active.value}</div>
        </div>

        <div
          id="viewport"
          class="
          flex absolute h-[300px] w-full top-full pt-[1px] left-2

          "
        >
          <div class="flex relative w-full h-full overflow-clip">
            <div
              data-state={active.value === 'A' ? 'open' : 'closed'}
              class="
      flex w-[400px] h-full z-30 border border-slate-300 rounded-b-lg p-4 bg-cyan-100 absolute
      origin-top-center transition-all duration-1000 fade-in fade-out
      data-[state=open]:animate-in    data-[state=open]:slide-in-from-top-[400px]  data-[state=open]:zoom-in-90 
      data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top-[400px] data-[state=closed]:fill-mode-forwards
      "
            >
              Content A
            </div>

            <div
              data-state={active.value === 'B' ? 'open' : 'closed'}
              onMouseLeave$={() => {
                window.setTimeout(() => {}, 2_000);
              }}
              class="
      flex w-[700px] h-[300px] z-30 border border-slate-300 rounded-b-lg p-4 bg-green-100 absolute
      origin-top-center transition-all duration-1000 fade-in fade-out
      data-[state=open]:animate-in    data-[state=open]:slide-in-from-top-[400px]  data-[state=open]:zoom-in-90 
      data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top-[400px] data-[state=closed]:fill-mode-forwards
      "
            >
              Content B
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
