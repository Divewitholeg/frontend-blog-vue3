<template>
  <div class="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 h-screen">
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

    <footer
      class="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 h-10 w-full fixed bottom-0 z-10"
    >
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
