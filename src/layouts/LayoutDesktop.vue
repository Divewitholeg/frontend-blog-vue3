<template>
  <div class="bg-gradient-to-r from-rose-100 to-teal-100 h-screen text-orange-950">
    <header class="h-15 w-full fixed top-0 z-10 shadow-lg">
      <slot name="header"></slot>
    </header>
    <div class="fixed inset-0 flex min-h-full overflow-hidden mt-20 mb-10">
      <aside class="flex-grow flex-shrink-0 h-screen w-1/6 overflow-hidden">
        <slot name="asideLeft"></slot>
      </aside>
      <main class="flex-grow flex-shrink-0 h-full w-4/6 overflow-y-scroll">
        <slot></slot>
      </main>
      <aside class="flex-grow flex-shrink-0 h-screen w-1/6 overflow-hidden">
        <slot name="asideRight"></slot>
      </aside>
    </div>

    <footer class="bg-gradient-to-r from-rose-100 to-teal-100 h-10 w-full fixed bottom-0 z-10">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
