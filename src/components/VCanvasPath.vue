<script setup lang="ts">
import { inject, watch } from "vue";
import type { Context } from "./VCanvas.vue";

const { path = "", opacity = 1 } = defineProps(["path", "opacity"]);

const context = inject("context") as Context;

watch(
  [context.ctx, context.updated, () => path],
  () => {
    if (context.ctx?.value) {
      const p = new Path2D(path);
      context.ctx.value?.save();
      context.ctx.value.globalAlpha = opacity;
      context.ctx.value?.stroke(p);
      context.ctx.value?.restore();
    }
  },
  { immediate: true }
);
</script>

<template />
