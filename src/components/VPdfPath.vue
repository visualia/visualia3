<script setup lang="ts">
import { ColorTypes } from "pdf-lib";
import { inject, watch } from "vue";
import type { Context } from "./VPdf.vue";

const { path = "" } = defineProps(["path"]);
const context = inject("context") as Context;

watch(
  context.pdf,
  () => {
    if (context.page.value) {
      context.page.value.drawSvgPath(path, {
        x: 0,
        y: context.height,
        borderWidth: 2,
        borderColor: { red: 1, green: 0, blue: 0, type: ColorTypes.RGB },
        opacity: 0.5,
      });
      context.update();
    }
  },
  { immediate: true }
);
</script>

<template />
