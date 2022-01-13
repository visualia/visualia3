<script setup lang="ts">
import Header from "./docs/Header.vue";
import Nav from "./docs/Nav.vue";
</script>
<template>
  <Header />
  <main class="grid grid-cols-[20vw,1fr] min-h-screen">
    <Nav class="p-8 shadow-xl" />
    <article
      class="p-12 prose prose-headings:text-gray-600 prose-strong:font-medium prose-a:text-sky-600 prose-a:underline prose-a:underline-offset-2"
    >
      <router-view />
    </article>
  </main>
</template>
