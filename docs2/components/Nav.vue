<script setup lang="ts">
import routes from "virtual:generated-pages";
const sidebar = [
  {
    text: "Introduction",
    link: "/",
  },
  {
    text: "Get Started",
    children: [
      { text: "Vite", link: "guide/get-started/vite" },
      { text: "Vitepress", link: "guide/get-started/vitepress" },
    ],
  },
];
</script>
<template>
  <router-link to="/">/index</router-link> |
  <router-link to="/bla">/bla</router-link>
  <pre>{{ sidebar }}</pre>
</template>
