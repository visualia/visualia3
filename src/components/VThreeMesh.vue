<script setup lang="ts">
import { BoxGeometry, MeshBasicMaterial, Mesh, BufferGeometry } from "three";
import { inject, watch } from "vue";

const context = inject("context", { scene: null });

type Props = {
  geometry?: BufferGeometry;
};

const { geometry = new BoxGeometry(10, 10, 10) } = defineProps<Props>();

watch(
  () => context.scene,
  () => {
    if (context.scene) {
      //const geometry = new BoxGeometry(20, 20, 20);
      const material = new MeshBasicMaterial({ color: "blue" });
      const cube = new Mesh(geometry, material);
      // @ts-ignore
      context.scene.add(cube);
    }
  },
  { immediate: true }
);
</script>

<template />
