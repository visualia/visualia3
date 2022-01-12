<script setup lang="ts">
import Nav from "./docs/Nav.vue";
</script>
<template>
  <main class="grid grid-cols-[20vw,1fr]">
    <Nav class="p-6" />
    <article class="prose p-6">
      <router-view />
    </article>
  </main>
</template>
