<template>
  <div class="relative h-screen text-fuchsia-950">
    <header class="fixed top-0 h-17 w-full bg-mobile shadow-lg z-10">
      <slot name="header"></slot>
    </header>
    <main class="overflow-y-auto h-full wheelsBackground">
      <slot></slot>
    </main>
    <footer class="fixed bottom-0 h-10 w-full bg-mobile z-10">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
