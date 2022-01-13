<script setup lang="ts">
import Header from "./Header.vue";
import Nav from "./Nav.vue";
</script>

<template>
  <Header />
  <main class="grid grid-cols-[200px_1fr] min-h-screen">
    <Nav class="p-8 shadow-xl" />
    <article
      class="p-12 prose prose-headings:text-gray-600 prose-strong:font-medium prose-a:text-sky-600 prose-a:underline prose-a:underline-offset-2 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-sky-100 prose-code:text-sky-700 prose-code:bg-sky-100 prose-code:font-normal prose-code:px-[0.2em] prose-code:py-[0.1em] prose-p:before:content-none prose-p:after:content-none prose-blockquote:border-l-4 prose-blockquote:border-yellow-400 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:pl-6"
    >
      <slot />
    </article>
  </main>
</template>
