<template>
  <header class="w-full z-10 sticky top-0 mb-6 dark:bg-gray-200">
    <div class="flex flex-col sm:flex-row items-center justify-between max-w-screen-lg py-3 mx-auto">
      <a
        class="w-32 py-1 cursor-pointer text-highlight font-bold"
        href="#"
      >
        Tristan Macelli
      </a>
      <nav class="flex flex-wrap items-center justify-center gap-x-6 m-0">
        <a
          class="nav-btn"
          href="#about">
          Home
        </a>
        <a
          class="nav-btn"
          href="#projects">
          Projects
        </a>
        <a
          class="nav-btn"
          href="#contact">
          Contact
        </a>
      </nav>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
  .nav-btn {
    @apply w-min px-2 py-1 rounded-md sm:inline-block font-semibold text-gray-600 hover:bg-gray-300 cursor-pointer;
  }
</style>
