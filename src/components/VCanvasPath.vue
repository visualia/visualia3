<script setup lang="ts">
import { inject, watch } from "vue";
import svgpath from "svgpath";
import getBounds from "svg-path-bounds";

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
    if (context.ctx?.value && path) {
      const [left, top, right, bottom] = getBounds(
        svgpath(path).unarc().toString()
      );
      const centerX = (right - left) / 2 + left;
      const centerY = (bottom - top) / 2 + top;
      const rotatedPath = svgpath(path)
        .rotate(rotate, centerX, centerY)
        .toString();

      const p = new Path2D(rotatedPath);

      context.ctx.value?.save();
      context.ctx.value.globalAlpha = opacity;
      context.ctx.value?.fill(p);
      context.ctx.value?.restore();
    }
  },
  { immediate: true }
);
</script>

<template />
