<script setup lang="ts">
import Test from "./components/Test.vue";
const x = $ref(10);
</script>

<template>
  <Test>Hello x: {{ x }}</Test>
  <input type="range" v-model="x" />
</template>
