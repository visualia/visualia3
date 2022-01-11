<script setup lang="ts">
import {
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  BufferGeometry,
  Material,
} from "three";
import { inject, watch } from "vue";
import type { Context } from "./VThree.vue";

const { scene, update } = inject("context") as Context;

type Props = {
  geometry?: BufferGeometry;
  material?: Material;
};

const {
  geometry = new BoxGeometry(10, 10, 10),
  material = new MeshBasicMaterial({ color: "red" }),
} = defineProps<Props>();

watch(
  () => scene,
  () => {
    if (scene) {
      const cube = new Mesh(geometry, material);
      scene.add(cube);
      update();
    }
  },
  { immediate: true }
);
</script>

<template />
