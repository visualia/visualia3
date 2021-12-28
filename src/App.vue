<script setup lang="ts">
import { watchEffect } from "vue";
import { v } from "./lib.es";

const x = $ref(10);
watchEffect(() => (v.x = x));
</script>

<template>
  <v-slider v-model="x" />
  <br />
  <v-math>x = {{ x }}</v-math>
  <br />
  <v-slider v-model="v.x" />
  <br />
  <v-math>v.x = {{ v.x }}</v-math>
</template>
