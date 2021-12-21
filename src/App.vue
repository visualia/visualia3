<script setup lang="ts">
import VTest from "./components/VTest.vue";
const x = $ref(10);
</script>

<template>
  <v-test>Hello x: {{ x }}</v-test>
  <input type="range" v-model="x" />
</template>
