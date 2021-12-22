<script setup lang="ts">
import { watchEffect } from "vue";
import { v } from "./lib";

const x = $ref(10);
watchEffect(() => (v.x = x));
</script>

<template>
  <v-test>Hello x: {{ x }}</v-test>
  <v-slider v-model="x" />
  <br />
  <v-test>Hello v.x: {{ v.x }}</v-test>
  <v-slider v-model="v.x" />
</template>
