<script setup lang="ts">
import { ColorTypes } from "pdf-lib";
import { inject, watch } from "vue";
import processPath from "svgpath";
import type { Context } from "./VPdf.vue";

const { path, transform = "" } = defineProps(["path", "transform"]);
const context = inject("context") as Context;

watch(
  context.pdf,
  () => {
    if (context.page.value && path) {
      const transformedPath = transform
        ? processPath(path).transform(transform).toString()
        : path;
      context.page.value.drawSvgPath(transformedPath, {
        x: 0,
        y: context.height,
        borderColor: { red: 0, green: 0, blue: 0, type: ColorTypes.RGB },
        opacity: 0.5,
      });
      context.update();
    }
  },
  { immediate: true }
);
</script>

<template />
