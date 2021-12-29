<script setup lang="ts">
import { inject, watch } from "vue";
import { BoxGeometry, MeshBasicMaterial, Mesh, BufferGeometry } from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { circlepath } from "../utils";

const context = inject("context", { scene: null });

const svg = `<svg width="100" height="100"><path d="${circlepath(
  0,
  0,
  10
)}"></path></svg>`;
const loader = new SVGLoader();
const svgData = loader.parse(svg);
console.log(svgData);

watch(
  () => context.scene,
  () => {
    if (context.scene) {
      // const geometry = new BoxGeometry(20, 20, 20);
      // const material = new MeshBasicMaterial({ color: "blue" });
      // const cube = new Mesh(geometry, material);
      // // @ts-ignore
      // context.scene.add(cube);
    }
  },
  { immediate: true }
);
</script>

<template />
