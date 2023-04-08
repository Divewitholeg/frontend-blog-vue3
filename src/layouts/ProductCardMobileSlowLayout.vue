<template>
  <div
    class="h-fit flex items-center mx-auto px-1 w-[80vw] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-lg shadow-slate-500 shadow-lg"
  >
    <div
      class="h-fit my-2 relative mx-auto [&>div]:my-3 [&>div]:leading-7 w-[75vw] bg-gradient-to-r from-rose-100 to-teal-100 shadow-white shadow-inner rounded-lg"
    >
      <div
        class="font-semibold font-sans px-2 text-xl tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500"
      >
        <span>
          <slot name="caption" />
        </span>
      </div>
      <div>
        <slot name="text" />
      </div>
    </div>
  </div>
</template>
