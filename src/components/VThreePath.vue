<script setup lang="ts">
import { inject, watch } from "vue";
import {
  MeshBasicMaterial,
  Mesh,
  Group,
  DoubleSide,
  ShapeGeometry,
  Material,
} from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { circlepath } from "../utils";
import { Context } from "./VThree.vue";

const { scene, update } = inject("context") as Context;

type Props = {
  path: string;
  material?: Material;
};

const {
  path,
  material = new MeshBasicMaterial({ color: "black", side: DoubleSide }),
} = defineProps<Props>();

function createPathGroup(path: string): Group {
  const svg = `<path d="${path}"></path>`;

  const loader = new SVGLoader();
  const svgData = loader.parse(svg);
  const paths = svgData.paths;

  const group = new Group();

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];

    const shapes = SVGLoader.createShapes(path);

    for (let j = 0; j < shapes.length; j++) {
      const shape = shapes[j];
      const geometry = new ShapeGeometry(shape);
      const mesh = new Mesh(geometry, material);
      group.add(mesh);
    }
  }
  return group;
}

const pathGroup = createPathGroup(path);

watch(
  () => scene,
  () => {
    if (scene) {
      scene.add(pathGroup);
      update();
    }
  },
  { immediate: true }
);

defineExpose({ pathGroup });
</script>

<template />
