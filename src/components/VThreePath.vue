<script setup lang="ts">
import { inject, watch } from "vue";
import {
  MeshBasicMaterial,
  Mesh,
  Group,
  DoubleSide,
  ShapeGeometry,
} from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { circlepath } from "../utils";

const context = inject("context", { scene: null, update: () => {} });

type Props = {
  path: string;
};

const { path } = defineProps<Props>();

function createPath(path: string): Group {
  const svg = `<path d="${path}"></path>`;

  const loader = new SVGLoader();
  const svgData = loader.parse(svg);
  const paths = svgData.paths;

  const group = new Group();

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];

    const material = new MeshBasicMaterial({
      color: "red",
      side: DoubleSide,
      depthWrite: false,
    });

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

// defineExpose({ group })

watch(
  () => context.scene,
  () => {
    if (context.scene) {
      const pathGroup = createPath(path);
      // @ts-ignore
      context.scene.add(pathGroup);
      context.update();
    }
  },
  { immediate: true }
);
</script>

<template />
