<script setup lang="ts">
import { ColorTypes } from "pdf-lib";
import { inject, watch } from "vue";
import type { Context } from "./VPdf.vue";

type LinepathCoord = {
  x: number;
  y: number;
};

function linepath(coords: LinepathCoord[], closed: boolean = false): string {
  const start = coords.shift();

  const d = [
    "M",
    `${start?.x || 0},${start?.y || 0}`,
    ...coords.map((p) => `L ${p.x},${p.y}`),
    closed ? "Z" : "",
  ].join(" ");

  return d;
}

function rectpoints(
  x: number,
  y: number,
  width: number,
  height: number
): LinepathCoord[] {
  return [
    { x, y },
    { x: x + width, y },
    { x: x + width, y: y + height },
    { x, y: y + height },
  ];
}

const {
  x = 0,
  y = 0,
  width = 0,
  height = 0,
} = defineProps(["x", "y", "width", "height"]);

const context = inject("context") as Context;

watch(
  context.pdf,
  () => {
    if (context.page.value) {
      const path = linepath(rectpoints(x, y, width, height), true);
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
