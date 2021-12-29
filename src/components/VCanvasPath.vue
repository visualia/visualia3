<script setup lang="ts">
import { inject, watch } from "vue";
import svgpath from "svgpath";
//import svgPathBounds from "svg-path-bounds";

import type { Context } from "./VCanvas.vue";

const {
  path = "",
  opacity = 1,
  rotate = 0,
} = defineProps(["path", "opacity", "rotate"]);

const context = inject("context") as Context;

watch(
  [context.ctx, context.updated, () => path],
  () => {
    if (context.ctx?.value) {
      // const bounds = svgPathBounds(path);
      // console.log(bounds);
      const rotatedPath = svgpath(path).rotate(rotate).toString();
      const p = new Path2D(rotatedPath);
      context.ctx.value?.save();
      context.ctx.value.globalAlpha = opacity;
      context.ctx.value?.stroke(p);

      const p2 = new Path2D(path);
      context.ctx.value?.stroke(p2);

      context.ctx.value?.restore();
    }
  },
  { immediate: true }
);
</script>

<template />
